import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'webcam-component',
	template: `
		<h2>webcam:</h2>
		<video [src]="videosrc" controls></video>
		<p>Press the start/stop button to enable streaming from the webcam. </p>
		<p>TODO: enable automatic streaming. </p>
	`
})


export class WebCamComponent implements OnInit {
	public videosrc: any;
	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
		this.showCam();
	}

	private showCam() {
		// 1. Casting necessary because TypeScript doesn't know object Type 'navigator';
		let nav = <any>navigator;

		// 2. Adjust for all browsers
		nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;

		// 3. Trigger lifecycle tick (ugly, but works)
		setTimeout(() => { }, 100);

		// 4. Get stream from webcam
		nav.getUserMedia(
			{ video: true },
			(stream) => {
				let webcamUrl = URL.createObjectURL(stream);
				
				// 4a. Tell Angular the stream comes from a trusted source
				this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);

				// 4b. TODO: start video element to stream automatically from webcam, instead of showing single image.
				// But how?
				//...
			},
			(err) => console.log(err));


		// OR: other method, see http://stackoverflow.com/questions/32645724/angular2-cant-set-video-src-from-navigator-getusermedia for credits
		// var promise = new Promise<string>((resolve, reject) => {
		// 	nav.getUserMedia({ video: true }, (stream) => {
		// 		resolve(stream);
		// 	}, (err) => reject(err));
        // }).then((stream) => {
        //     let webcamUrl = URL.createObjectURL(stream);
		// 	this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);
        // }).catch((error) => {
		// 	console.log(error);
        // });
	}
}
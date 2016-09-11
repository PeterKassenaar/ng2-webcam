import {Component} from '@angular/core';

@Component({
    selector: 'webcam-app',
    template: `
		<h1>Angular 2 Webcam example</h1>		
		<hr />
		<webcam-component></webcam-component>
	`
})
export class AppComponent {
    constructor() {

    }

    ngOnInit() {
    }

}

// modules (Angular 2, .rc6)
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppComponent } from './app.component';
import { WebCamComponent } from './webcam/webcamp.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, WebCamComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

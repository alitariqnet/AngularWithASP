import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, ChildComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommentsComponent } from './comments/comments.component';

import { NgOptimizedImage } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentsComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MatSlideToggleModule,
    AppRoutingModule, NgOptimizedImage, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

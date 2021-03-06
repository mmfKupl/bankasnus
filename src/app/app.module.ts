import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SliderComponent } from './slider/slider.component';
import { ImageSetComponent } from './image-set/image-set.component';
import { PageComponent } from './page/page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { TopInfoComponent } from './top-info/top-info.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SliderComponent,
    ImageSetComponent,
    PageComponent,
    MainPageComponent,
    GalleryPageComponent,
    TopInfoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TransferHttpCacheModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

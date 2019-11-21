import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SliderComponent } from './slider/slider.component';
import { ImageSetComponent } from './image-set/image-set.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { PageComponent } from './page/page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SliderComponent,
    ImageSetComponent,
    HeaderInfoComponent,
    PageComponent,
    MainPageComponent,
    GalleryPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

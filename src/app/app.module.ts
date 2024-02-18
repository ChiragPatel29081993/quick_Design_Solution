import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ShareComponent } from './components/share/share.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminProfileComponent,
    AboutUsComponent,
    FooterComponent,
    PaymentInfoComponent,
    GalleryComponent,
    ShareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

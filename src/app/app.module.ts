import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NameEditComponent } from './profile/name-edit/name-edit.component';
import { NumberEditComponent } from './profile/number-edit/number-edit.component';
import { EmailEditComponent } from './profile/email-edit/email-edit.component';
import { BioEditComponent } from './profile/bio-edit/bio-edit.component';
import { ImageEditComponent } from './profile/image-edit/image-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileService } from './profile/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NameEditComponent,
    NumberEditComponent,
    EmailEditComponent,
    BioEditComponent,
    ImageEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

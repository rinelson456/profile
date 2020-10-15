import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NameEditComponent } from './profile/name-edit/name-edit.component';
import { NumberEditComponent } from './profile/number-edit/number-edit.component';
import { ImageEditComponent } from './profile/image-edit/image-edit.component';
import { EmailEditComponent } from './profile/email-edit/email-edit.component';
import { BioEditComponent } from './profile/bio-edit/bio-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'name', component: NameEditComponent },
  { path: 'phone', component: NumberEditComponent },
  { path: 'image', component: ImageEditComponent },
  { path: 'email', component: EmailEditComponent },
  { path: 'bio', component: BioEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

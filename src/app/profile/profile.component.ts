import { Component, OnInit,} from '@angular/core';
import { Bio } from '../../shared/bio.module'
import { Name } from '../../shared/name.module'
import { Number } from '../../shared/number.module'
import { Email } from '../../shared/email.module'
import { Image } from '../../shared/image.module'
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    names: Name;
    emails: Email;
    numbers: Number;
    images: Image;
    bios: Bio;


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.names = this.profileService.getNames();
    this.emails = this.profileService.getEmailAddresses();
    this.numbers = this.profileService.getNumbers();
    this.images = this.profileService.getImages();
    this.bios = this.profileService.getBios();

    this.profileService.nameChanged.subscribe((names: Name) => {
      this.names = names;
    });
    this.profileService.emailChanged.subscribe((emails: Email) => {
      this.emails = emails;
    });
    this.profileService.numberChanged.subscribe((numbers: Number) => {
      this.numbers = numbers;
      console.log(this.numbers);
    });
    this.profileService.imageChanged.subscribe((images: Image) => {
      this.images = images;
    });
    this.profileService.bioChanged.subscribe((bios: Bio) => {
      this.bios = bios;
    });

  }

}

import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import  { Email} from '../../../shared/email.module'
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-email-edit',
  templateUrl: './email-edit.component.html',
  styleUrls: ['./email-edit.component.css']
})
export class EmailEditComponent implements OnInit {
  @ViewChild('emailInput') emailInputRef: ElementRef;


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const email = this.emailInputRef.nativeElement.value;
    const newEmail = new Email(email);
    this.profileService.addEmailAddresses(newEmail);
  }

}

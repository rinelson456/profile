import { Component, ElementRef, OnInit, ViewChild,} from '@angular/core';

import  { Name} from '../../../shared/name.module'
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.css']
})
export class NameEditComponent implements OnInit {
  @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
  @ViewChild('lastNameInput') lastNameInputInputRef: ElementRef;
  names: Name;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.names = this.profileService.getNames();
  }

  onAddItem(){
    const firstName = this.firstNameInputRef.nativeElement.value;
    const lastName = this.lastNameInputInputRef.nativeElement.value;
    const newName = new Name(firstName, lastName);
    this.profileService.addNames(newName);
  }

}

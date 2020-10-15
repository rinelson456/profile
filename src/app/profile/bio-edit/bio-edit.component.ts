import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';

import  { Bio} from '../../../shared/bio.module'
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-bio-edit',
  templateUrl: './bio-edit.component.html',
  styleUrls: ['./bio-edit.component.css']
})
export class BioEditComponent implements OnInit {
  @ViewChild('bioInput') bioInputRef: ElementRef;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const bio = this.bioInputRef.nativeElement.value;
    const newBio = new Bio(bio);
    this.profileService.addBios(newBio);
  }

}

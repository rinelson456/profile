import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';

import  { Image} from '../../../shared/image.module'
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {
  @ViewChild('imageInput') imageInputRef: ElementRef;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const image = this.imageInputRef.nativeElement.value;
    const newImage = new Image(image);
    this.profileService.addImages(newImage);
  }

}
import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { ImageSnippet } from 'src/shared/imageSnipet.module';

import  { Image} from '../../../shared/image.module'
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {
  @ViewChild('imageInput') imageInputRef: ElementRef;
  selectedFile: ImageSnippet;


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  onAddItem(){
    const image = this.imageInputRef.nativeElement.value;
    const newImage = new Image(image);
    this.profileService.addImages(newImage);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      console.log(this.selectedFile.file)
      this.profileService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }

}
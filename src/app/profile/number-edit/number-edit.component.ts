import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';

import  { Number} from '../../../shared/number.module'
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-number-edit',
  templateUrl: './number-edit.component.html',
  styleUrls: ['./number-edit.component.css']
})
export class NumberEditComponent implements OnInit {
  @ViewChild('numberInput') numberInputRef: ElementRef;
  numbers: Number;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.numbers = this.profileService.getNumbers();
  }

  onAddItem(){
    const number = this.numberInputRef.nativeElement.value;
    const newNumber = new Number(number);
    this.profileService.addNumbers(newNumber);
  }

}

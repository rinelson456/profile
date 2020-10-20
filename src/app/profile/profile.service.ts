import { EventEmitter, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Bio } from '../../shared/bio.module'
import { Email } from '../../shared/email.module'
import { Image } from '../../shared/image.module'
import { Name } from '../../shared/name.module'
import { Number } from '../../shared/number.module'
import { DEFAULTBIO, DEFAULTEMAIL, DEFAULTIMAGE, DEFAULTNAME, DEFAULTNUMBER } from '../profile/DEFAULT';

@Injectable()
 export class ProfileService{
    nameChanged= new EventEmitter<Name>();
    emailChanged= new EventEmitter<Email>();
    numberChanged= new EventEmitter<Number>();
    bioChanged= new EventEmitter<Bio>();
    imageChanged= new EventEmitter<Image>();

    private names: Name;
    private emails: Email;
    private numbers: Number;
    private images: Image;
    private bios: Bio;

    constructor(private http: HttpClient){

    }

    public uploadImage(image: File): Observable<any> {
        const formData = new FormData();
        console.log(formData);
        console.log(image);
        formData.append('image', image);
        console.log(formData)
        console.log(this.http.put('/api/v1/image-upload', formData))
    
        return this.http.put('/api/v1/image-upload', formData);
      }


    getNames() {
        let name = localStorage.getItem("names");
        if(name !== null){
            this.names = JSON.parse(name);
        }
        else{
            this.names = DEFAULTNAME;
        }
        return this.names;
    }
    
    getEmailAddresses() {
        let email = localStorage.getItem("emails");
        if(email !== null){
            this.emails = JSON.parse(email);
        }
        else{
            this.emails = DEFAULTEMAIL;
        }
        return this.emails;
    }
    
    getNumbers() {
        let number = localStorage.getItem("numbers");
        if(number !== null){
            this.numbers = JSON.parse(number);
        }
        else{
            this.numbers = DEFAULTNUMBER;
        }

        return this.numbers;
    }
    
    getImages() {
        let image = localStorage.getItem("images");
        console.log(image)
        if(image !== null){
            this.images = JSON.parse(image);
    
        }
        else{
            this.images = DEFAULTIMAGE;
        }
        return this.images;
        
    }
    
    getBios() {
        let bio = localStorage.getItem("bios");
        if(bio !== null){
            this.bios = JSON.parse(bio);
        }
        else{
            this.bios = DEFAULTBIO;
        }
        return this.bios;
    }

    addNames(name: Name) {
        this.names = name;
        this.nameChanged.emit(this.names);
        localStorage.setItem("names", JSON.stringify(name));
    }
    
    addEmailAddresses(email: Email) {
        this.emails = email;
        this.emailChanged.emit(this.emails);
        localStorage.setItem("emails", JSON.stringify(email));
    }
    
    addNumbers(number: Number) {
        this.numbers = number;
        this.numberChanged.emit(this.numbers);
        localStorage.setItem("numbers", JSON.stringify(number));
    }
    
    addImages(image: Image) {
        
        this.images = image;
        this.imageChanged.emit(this.images);
        localStorage.setItem("images", JSON.stringify(image));
    }
    
    addBios(bio: Bio) {
        this.bios = bio;
        this.bioChanged.emit(this.bios);
        localStorage.setItem("bios", JSON.stringify(bio));
    }

}
import { EventEmitter } from '@angular/core'

import { Bio } from 'src/shared/bio.module'
import { Email } from 'src/shared/email.module'
import { Image } from 'src/shared/image.module'
import { Name } from 'src/shared/name.module'
import { Number } from 'src/shared/number.module'

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

    constructor(){

    }


    getNames() {
        let name = localStorage.getItem("names");
        this.names = JSON.parse(name);
        return this.names;
    }
    
    getEmailAddresses() {
        let email = localStorage.getItem("emails");
        this.emails = JSON.parse(email);
        return this.emails;
    }
    
    getNumbers() {
        let number = localStorage.getItem("numbers");
        this.numbers = JSON.parse(number);
        return this.numbers;
    }
    
    getImages() {
        let image = localStorage.getItem("images");
        this.images = JSON.parse(image);
        return this.images;
    }
    
    getBios() {
        let bio = localStorage.getItem("bios");
        this.bios = JSON.parse(bio);
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
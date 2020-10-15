import { EventEmitter } from '@angular/core'

import { Bio } from 'src/shared/bio.module'
import { Email } from 'src/shared/email.module'
import { Image } from 'src/shared/image.module'
import { Name } from 'src/shared/name.module'
import { Number } from 'src/shared/number.module'

export class ProfileService{
    nameChanged= new EventEmitter<Name[]>();
    emailChanged= new EventEmitter<Email>();
    numberChanged= new EventEmitter<Number>();
    bioChanged= new EventEmitter<Bio>();
    imageChanged= new EventEmitter<Image>();

    private names: Name[] = [ new Name('', '')]
    private emails: Email;
    private numbers: Number;
    private images: Image;
    private bios: Bio;

    getNames() {
        return this.names.slice();
    }
    
    getEmailAddresses() {
        return this.emails;
    }
    
    getNumbers() {
        
        return this.numbers;
    }
    
    getImages() {
        return this.images;
    }
    
    getBios() {
        return this.bios;
    }

    addNames(name: Name) {
        this.names.push(name);
        this.nameChanged.emit(this.names.slice());
    }
    
    addEmailAddresses(email: Email) {
        this.emails = email;
    }
    
    addNumbers(number: Number) {
        this.numbers = number;
        this.numberChanged.emit(this.numbers);
    }
    
    addImages(image: Image) {
        this.images = image;
    }
    
    addBios(bio: Bio) {
        this.bios = bio;
    }
}
import { Bio } from 'src/shared/bio.module'
import { Email } from 'src/shared/email.module'
import { Name } from 'src/shared/name.module'
import { Number } from 'src/shared/number.module'
import { Image } from '../../shared/image.module'

export const DEFAULTIMAGE: Image = {
    image: '../../assets/images/blank-profile-picture-973460_640.png'
}

export const DEFAULTNAME: Name = {
    firstName: 'First Name', lastName: 'Last Name'
}

export const DEFAULTNUMBER: Number = {
    phone: 'Phone Number'
}

export const DEFAULTEMAIL: Email = {
    email: 'Email'
}

export const DEFAULTBIO: Bio = {
    bio: "Write a little about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? etc."
}
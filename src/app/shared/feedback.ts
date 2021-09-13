export class Feedback{
    firstname!: string;
    lastname!: string;
    telnum: number | undefined;
    email!: string;
    agree!: boolean;
    contacttype!: string;
    message!: string;
}


export const ContactType = ["None", "Tel", "Email"];
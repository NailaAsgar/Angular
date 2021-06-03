export class Comment{
    rating!: number;
    comment:string;
    author: string;
    date: string;

    constructor(){
        this.comment="";
        this.author="";
        this.date="";

    }
}
export class Register {
    constructor(
        public username: string,
        public Fname: string,
        public Lname: string,
        public password: string,
        public email: string,
        public photo?: string,
        public dob?: string,
        public following?:Array<string>,
        public followers?:Array<string>
    ) { }
}

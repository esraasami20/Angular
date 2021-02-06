export class Blog {
    constructor(
        public author?:string,
        public title?: string,
        public body?:string,
        public tags?: [string],
        public createdAt?: Date,
        public updatedAt?: Date,
        public photo?: string
    ) { }
}


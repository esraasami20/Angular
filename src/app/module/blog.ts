import { Comment } from "./comment";

export class Blog {
    constructor(
        public title: string,
        public body: string,
        public tags?: Array<string>,
        public photo?: string,
        public _id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public auther?: string,
        public comments?: Comment[],
        public username?: string
    ) { }
}


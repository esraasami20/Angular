import { Injectable } from '@angular/core';

@Injectable()
export class SharedValueService{
    constructor(){

    }

    public configuration = {
        apiURI: ''
    }
}
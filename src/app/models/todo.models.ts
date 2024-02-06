import { Url } from "url";

export class Todo {
    constructor (
        public stock: number,
        public action: string,
        public done: boolean,
        public pic: string,
        public promo: number,
    ) {}
}
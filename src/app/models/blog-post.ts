
export class BlogPost {
    status: string[];
    id: string;
    title: string;
    subtitle: string;
    text: string;
    postDatetime: string;
    categoryId: string;

    // Assign values from json to properties
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class UserModel {
    public id: string;
    public _id: string;
    public name: string;
    public source: string;

    constructor(user: any) {
        this.id = user.id;
        this._id = user._id;
        this.name = user.name;
        this.source = user.source;
    }
}
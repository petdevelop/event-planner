export class FriendsModel {
    public name: string;
    public _id: string;

    constructor(friend: any) {
        this.name = friend.name;
        this._id = friend._id;
    }
}
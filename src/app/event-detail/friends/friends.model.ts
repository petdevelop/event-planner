export class FriendsModel {
    public _id: string;
    public name: string;
    public userId: string;

    constructor(friend: any) {
        this._id = friend._id;
        this.name = friend.name;
        this.userId = friend.userId;
    }
}
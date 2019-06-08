
export class EventsModel {
    public _id: string;
    public userId: string;
    public description: string;
    public date: Date;
    public location: string;

    constructor(model: any) {
        this._id = model._id;
        this.userId = model.userId;
        this.description = model.description;
        this.date = model.date;
        this.location = model.location;
    }
}

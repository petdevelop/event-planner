
export class EventsModel {
    public id: string;
    public userId: string;
    public description: string;
    public date: Date;
    public location: string;

    constructor(model: any) {
        this.id = model._id;
        this.userId = model.userId;
        this.description = model.description;
        this.date = model.date;
        this.location = model.location;
    }
}

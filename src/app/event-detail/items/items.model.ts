
export class ItemsModel {
    public _id: string;
    public eventId: string;
    public description: string;
    public name: string;
    public url: string;

    constructor(model: any) {
        this._id = model._id;
        this.eventId = model.eventId;
        this.description = model.description;
        this.name = model.name;
        this.url = model.url;
    }
}

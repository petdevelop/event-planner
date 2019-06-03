
export class EventsModel {
    constructor(
        public id: string,
        public userId: string,
        public description: string,
        public date: Date,
        public location: string,
    ) {}
}

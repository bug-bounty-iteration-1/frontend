import { Status } from "./status";

export class Bug {
    constructor(
        public bugId: number,
        public bugDescription: String,
        public bugSubmissionDate: Date,
        public bugStatus: Status
    ) {}
}
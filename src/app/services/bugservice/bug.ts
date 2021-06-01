import { Status } from "./status";

export class Bug {
  
        public bugId: number;
        public bugDescription: String;
        public bugSubmissionDate: Date;
        public bugStatus: Status;
        public bugOwner:string;
        constructor(){};
}
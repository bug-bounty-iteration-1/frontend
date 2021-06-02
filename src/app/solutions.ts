import { Bug } from "./services/bugservice/bug";
import { User } from "./user";

export class Solutions{
    solutionId: number;
    solution: string;
    status: boolean;
    solutionSubmissionDate:Date;
    bug:Bug;
    user:User;

    constructor(){};
}
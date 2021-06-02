import { Role } from "./role";

export class User{
    userId:number;
    firstName: string;
    lastName: string;
    userName: string;
    passWord: string;
    currentRole: Role;
    constructor(){};
}
import { Role } from "./role";

export class User{
     firstName: string;
    lastName: string;
    userName: string;
    passWord: string;
    currentRole: Role
    public userId?: number
    constructor(){};
}
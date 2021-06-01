import { Role } from "./role";

export class register{
    constructor(public password:string,public firstName:String,public userName:String,public lastName:String, public currentRole: Role, public userId?: number){
    }
}
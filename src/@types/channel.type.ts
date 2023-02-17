import {userType} from "./user.type";
import {messageType} from "./message.type";

export type channelType = {
    name: string,
    topic: string,
    description: string,
    users: userType[],
    messages: messageType[]
}
type channelMessage = {
    sender: string,
    timestamp: Date,
    message: string
}

type channels = {
    name: string,
    members: string[],
    messages: channelMessage[]
}

export interface userType {
    username: string,
    password: string,
    userId: string,
    channels: channels[]
}
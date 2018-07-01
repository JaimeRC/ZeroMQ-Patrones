require('dotenv').config()
import * as zmq from 'zeromq'

const HOST: string = process.env.HOST
const PORT_PULL_PUSH: string = process.env.PORT_PULL_PUSH

const push = zmq.socket('push')
const ip: string = `tcp://${HOST}:${PORT_PULL_PUSH}`

export = {

    conection(): void {
        push.bindSync(ip)
    },

    sendMessage(msg: JSON): void {
        let query: string = JSON.stringify(msg)
        push.send(query)
    }
}
require('dotenv').config()
import * as zmq from 'zeromq'

const HOST: string = process.env.HOST,
    PORT_PUB_SUB: string = process.env.PORT_PUB_SUB,
    pub = zmq.socket('pub'),
    ip: string = `tcp://${HOST}:${PORT_PUB_SUB}`,
    channel: string = 'PubSub'

export = {

    conection(): any {
        pub.bind(ip)
    },

    sendMessage(msg: JSON): any {
        let query: string = JSON.stringify(msg)
        pub.send([channel, query])
    }
}
import { Kafka, logLevel } from 'kafkajs'

export class CampaignBookingListener {
    private kafka = new Kafka({
        logLevel: logLevel.INFO,
        clientId: 'consumer',
        brokers: ['localhost:9092']
    })

    private groupId: string

    constructor(groupId: string) {
        this.groupId = groupId
    }

    async startListener() {
        const consumer = this.kafka.consumer({ groupId: this.groupId })
        await consumer.connect()
        await consumer.subscribe({ topic: "campaign-booking", fromBeginning: true})
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
                console.log(`- group-id: ${this.groupId}, ${prefix} ${message.key}#${message.value}`)
            }
        }).then(() => console.log("after run"))
    }
}
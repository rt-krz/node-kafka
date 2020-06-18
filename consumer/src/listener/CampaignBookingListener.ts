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
    }
}
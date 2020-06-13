import { Kafka, Producer, ProducerRecord } from 'kafkajs'

export class BookCampaignService {
    private producer: Producer;

    constructor() {
        const kafka = new Kafka({
            clientId: 'producer',
            brokers: ['localhost:9092']
        })

        this.producer = kafka.producer()
        this.producer.connect()
    }

    async bookCampaign() {
        await this.producer.send({topic: 'campaign-booking',messages: [{key: "123", value: 'test'}]});
    }   
}

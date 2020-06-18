import { Kafka, Producer, ProducerRecord } from 'kafkajs'

export class BookCampaignService {
    private producer: Producer;

    constructor() {
        const kafka = new Kafka({
            clientId: 'producer',
            brokers: ['localhost:9092']
        })
    }

    async bookCampaign() {
    }   
}

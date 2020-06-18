import { BookCampaignService } from './services/BookCampaignService';
import { Request, Response } from 'express';

const bookCampaignService = new BookCampaignService();

const express = require('express');
const app = express()

app.get('/book-campaign', (req: Request, res: Response) => {
    bookCampaignService.bookCampaign()
    res.type('application/json').send('{"result": "OK1"}')
})

app.listen(3000, () => console.log('Listening on 3000'))


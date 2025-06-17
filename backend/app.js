require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio');

mongoose.connect(process.env.MONGODB_URI);

const app = express();

const PORT = 3000;
app.use(express.json());


app.post('/api/portfolios', async (req, res) => {
    try {
        const data = req.body
        const newPortfolio = new Portfolio(data);
        const savedPortfolio =  await newPortfolio.save();
        res.status(201).json(savedPortfolio);
    } catch (err) {
        console.log('Error saving portfolio:', err);
        res.status(500).json({message: 'Server error'});
    };
});

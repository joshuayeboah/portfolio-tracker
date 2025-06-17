require('dotenv').config();
const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    seedData();
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

async function seedData() {
  const portfolio = new Portfolio({
    userId: 'user123',
    holdings: [
      {
        symbol: 'AAPL',
        quantity: 10,
        purchaseDate: new Date('2023-01-10'),
        purchasePrice: 130
      },
      {
        symbol: 'MSFT',
        quantity: 5,
        purchaseDate: new Date('2023-02-15'),
        purchasePrice: 240,
        sellDate: new Date('2024-03-20'),
        sellPrice: 300
      }
    ]
  });

  await portfolio.save();
  console.log('✅ Portfolio saved!');
  mongoose.disconnect();
}
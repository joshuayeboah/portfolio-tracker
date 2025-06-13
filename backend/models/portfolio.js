const mongoose = require('mongoose');

const StockHoldingSchema = new mongoose.Schema({
  symbol: String,
  quantity: Number,
  purchaseDate: Date,
  purchasePrice: Number,
  sellDate: Date,
  sellPrice: Number
});

const PortfolioSchema = new mongoose.Schema({
  userId: String,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  holdings: [StockHoldingSchema]
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
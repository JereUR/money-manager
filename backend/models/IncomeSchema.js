const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      timr: true
    },
    type: {
      type: String,
      default: 'income'
    },
    date: {
      type: Date,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      maxLength: 30,
      trim: true
    },
    description: {
      type: String,
      required: true,
      maxLength: 30,
      trim: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Income', IncomeSchema)

const ExpenseSchema = require('../models/ExpenseSchema')

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body

  const expense = ExpenseSchema({ title, amount, category, description, date })

  try {
    //validations
    if (!title || !amount || !category || !description || !date) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son requeridos.' })
    }

    if (amount <= 0 || !amount === 'number') {
      return res
        .status(400)
        .json({ message: 'Monto debe ser un número positivo.' })
    }

    await expense.save()
    res.status(200).json({ message: 'Gasto Agregado.' })
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' })
  }
}

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ date: 1 })
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' })
  }
}

exports.deleteExpense = async (req, res) => {
  const { id } = req.params
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: `Gasto '${expense.title}' Eliminado.` })
    })
    .catch((error) => {
      res.status(500).json({ message: `Error en el servidor: ${error}` })
    })
}

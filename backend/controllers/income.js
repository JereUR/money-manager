const IncomeSchema = require('../models/IncomeSchema')

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body

  const income = IncomeSchema({ title, amount, category, description, date })

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

    await income.save()
    res.status(200).json({ message: 'Ingreso Agregado.' })
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' })
  }
}

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ date: -1 })
    res.status(200).json(incomes)
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' })
  }
}

exports.deleteIncome = async (req, res) => {
  const { id } = req.params
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: `Ingreso '${income.title}' Eliminado.` })
    })
    .catch((error) => {
      res.status(500).json({ message: `Error en el servidor: ${error}` })
    })
}

import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const GlobalContext = createContext()

const BASE_URL = import.meta.env.VITE_BASE_URL

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message)
      })
  }

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`)
    setIncomes(response.data)
  }

  /* const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message)
      })
  } */

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.object.isRequired
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

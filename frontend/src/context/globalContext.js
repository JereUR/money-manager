import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}

GlobalProvider.propTypes = {
  children: PropTypes.func.isRequired
}

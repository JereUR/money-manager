import styled from 'styled-components'

import { InnerLayout } from '../../styles/Layout'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../Form/Form'

export default function Incomes() {
  const { addIncome } = useGlobalContext()

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Ingresos</h1>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes"></div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div``

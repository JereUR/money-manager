import styled from 'styled-components'

import { InnerLayout } from '../../styles/Layout'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../Form/Form'
import { useEffect } from 'react'
import IncomeItem from '../IncomeItem/IncomeItem'

export default function Incomes() {
  const { addIncome, incomes, getIncomes } = useGlobalContext()

  useEffect(() => {
    getIncomes()
  }, [incomes])

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Ingresos</h1>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } = income

              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  amount={amount}
                  date={date}
                  category={category}
                  description={description}
                  indicatorColor="var(--color-green)"
                />
              )
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;

  .income-content {
    display: flex;
    gap: 2rem;

    .incomes {
      flex: 1;
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color3);
    border-radius: 5px;
  }
`

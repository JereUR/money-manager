import { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from '../../context/globalContext'
import Button from '../Button/Button'
import { plus } from '../../utils/Icons'

const initialData = {
  title: '',
  amount: '',
  date: '',
  category: '',
  description: ''
}

export default function IncomeForm() {
  const { addIncome, getIncomes } = useGlobalContext()
  const [inputState, setInputState] = useState(initialData)

  const { title, amount, date, category, description } = inputState

  const handleInput =
    (name) =>
    ({ target }) => {
      setInputState({ ...inputState, [name]: target.value })
    }

  const handleSubmit = (e) => {
    e.preventDefault()

    addIncome(inputState)
    setInputState(initialData)
    getIncomes()
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Nombre del Ingreso"
          onChange={handleInput('title')}
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          value={amount}
          name="amount"
          placeholder="Total del Ingreso"
          onChange={handleInput('amount')}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Fecha"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date })
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleInput('category')}
          required
        >
          <option value="" disabled>
            Seleccione una Opción
          </option>
          <option value="salary">Salario</option>
          <option value="freelancing">Trabajo Independiente</option>
          <option value="investiments">Inversiones</option>
          <option value="stocks">Ahorros</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Transferencia Bancaria</option>
          <option value="youtube">Youtube/Stream</option>
          <option value="other">Otros</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Referencia/Descripción"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput('description')}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={'Agregar Ingreso'}
          icon={plus}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent)'}
          color={'#fff'}
        />
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid var(--border-color);
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(158, 157, 157, 0.4);
    color: rgba(34, 34, 96, 0.9);

    &::placeholder {
      color: rgba(34, 34, 96, 0.7);
    }
  }

  .input-control {
    input {
      width: 100%;
    }

    #date {
      width: 140%;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;

    select {
      color: rgba(34, 34, 96, 0.7);

      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease-in-out;

      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`

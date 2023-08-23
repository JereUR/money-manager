import styled from 'styled-components'

import { InnerLayout } from '../../styles/Layout'
import Chart from '../Chart/Chart'

export default function Dashboard() {
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Todas las Transacciones</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div``

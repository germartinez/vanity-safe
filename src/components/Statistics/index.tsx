import { Text } from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import { Line, SCard } from '../../styles/commonElements'
import { formatNumber, formatPercentage } from '../../utils'

const Bar = styled.div`
  background: #f0efee;
  width: 140px;
  margin-right: 20px;
  border-radius: 4px;
  overflow: hidden;
`

interface FilledBarProps {
  width: number
}

const FilledBar = styled.div<FilledBarProps>`
  background: #008c73;
  height: 15px;
  width: ${(p) => p.width + '%'};
`

interface StatisticsProps {
  attempts: number
  difficulty: number
  probability: number
  isRunning: boolean
}

const Statistics = (statistics: StatisticsProps) => {
  const { difficulty, attempts, probability, isRunning } = statistics
  return (
    <SCard>
      <Line>
        <Text size="xl">Difficulty:</Text>
        <Text size="xl">{formatNumber(difficulty)}</Text>
      </Line>
      <Line>
        <Text size="xl">Generated:</Text>
        <Text size="xl">{formatNumber(attempts)} addresses</Text>
      </Line>
      <Line>
        <Text size="xl">Probability:</Text>
        <Bar>
          <FilledBar width={formatPercentage(probability)}></FilledBar>
        </Bar>
        <Text size="xl">{formatPercentage(probability)}%</Text>
      </Line>
      <Line>
        <Text size="xl">Status:</Text>
        <Text size="xl">{isRunning ? 'Running' : 'Stopped'}</Text>
      </Line>
    </SCard>
  )
}

export default Statistics

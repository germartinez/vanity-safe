import { Text } from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import { Line, SCard } from '../../styles/commonElements'
import { formatNumber, formatPercentage } from '../../utils'

const Bar = styled.div`
  background: #f0efee;
  flex: 1;
  margin-right: 10px;
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

const Percentage = styled.div`
  width: 65px;
`

interface StatisticsProps {
  difficulty: number
  attempts: number
  initialSaltNonce: number
  currentSaltNonce: number
  probability: number
  isRunning: boolean
}

const Statistics = (statistics: StatisticsProps) => {
  const {
    difficulty,
    attempts,
    probability,
    isRunning,
    initialSaltNonce,
    currentSaltNonce
  } = statistics
  return (
    <SCard>
      <Line>
        <Text size="xl">Difficulty:</Text>
        <Text size="xl">{formatNumber(difficulty)}</Text>
      </Line>
      <Line>
        <Text size="xl">Generated addresses:</Text>
        <Text size="xl">{formatNumber(attempts)}</Text>
      </Line>
      <Line>
        <Text size="xl">Nonces checked:</Text>
        <Text size="xl">
          {formatNumber(initialSaltNonce)} - {formatNumber(currentSaltNonce)}
        </Text>
      </Line>
      <Line>
        <Text size="xl">Probability:</Text>
        <Bar>
          <FilledBar width={formatPercentage(probability)}></FilledBar>
        </Bar>
        <Percentage>
          <Text size="xl">{formatPercentage(probability)}%</Text>
        </Percentage>
      </Line>
      <Line>
        <Text size="xl">Status:</Text>
        <Text size="xl">{isRunning ? 'Running' : 'Stopped'}</Text>
      </Line>
    </SCard>
  )
}

export default Statistics

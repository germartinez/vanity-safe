import { Text } from '@gnosis.pm/safe-react-components'
import React from 'react'
import { Line, SCard } from '../../styles/commonElements'
import { formatNumber } from '../../utils'

interface StatisticsProps {
  attempts: number
  difficulty: number
  isRunning: boolean
}

const Statistics = (statistics: StatisticsProps) => {
  const { difficulty, attempts, isRunning } = statistics
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
        <Text size="xl">Status:</Text>
        <Text size="xl">{isRunning ? 'Running' : 'Stopped'}</Text>
      </Line>
    </SCard>
  )
}

export default Statistics

import { Card } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'

export const SCard = styled(Card)`
  margin: 24px;
`

export const Line = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  & > p:first-child {
    font-weight: bold;
    margin-right: 20px;
  }
`

export const LineCenter = styled(Line)`
  justify-content: center;
`

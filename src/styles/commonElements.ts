import { Card, EthHashInfo } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'

export const SCard = styled(Card)`
  margin: 24px;
  @media screen and (max-width: 950px) {
    margin: 10px auto;
    width: 600px;
  }
  @media screen and (max-width: 650px) {
    margin: 10px 0;
    width: 100%;
  }
`

export const Line = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  & > p:first-child {
    font-weight: bold;
    margin-right: 10px;
  }
`

export const LineCenter = styled(Line)`
  justify-content: center;
`

export const SEthHashInfo = styled(EthHashInfo)`
  & > div > p {
    font-weight: bold;
  }
`

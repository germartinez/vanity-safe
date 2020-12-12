import { EthHashInfo, Text, Title } from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { Line, SCard } from '../../styles/commonElements'
import ConnectButton from './ConnectButton'

const Card = styled(SCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const STitle = styled(Title)`
  color: #008c73;
`

interface HeaderProps {
  owner: string
  setWeb3: Function
}

const Header = ({ owner, setWeb3 }: HeaderProps) => {
  const onWeb3Connect = async (provider: any) => {
    if (provider) {
      const web3 = new Web3(provider)
      setWeb3(web3)
    }
  }

  return (
    <Card>
      <STitle size="md" withoutMargin>
        Vanity Safe Generator
      </STitle>
      <Line>
        {!owner ? (
          <ConnectButton onConnect={onWeb3Connect} />
        ) : (
          <>
            <Text size="xl">Safe owner:</Text>
            <EthHashInfo
              hash={owner}
              showIdenticon
              identiconSize="lg"
              textSize="xl"
              showCopyBtn
              showEtherscanBtn
              shortenHash={4}
            />
          </>
        )}
      </Line>
    </Card>
  )
}

export default Header

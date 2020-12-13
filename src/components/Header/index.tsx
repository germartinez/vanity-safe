import { EthHashInfo, Title } from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { Line, SCard } from '../../styles/commonElements'
import ConnectButton from './ConnectButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`

const STitle = styled(Title)`
  color: #008c73;
  padding: 0 15px 0 0;
  @media screen and (max-width: 500px) {
    padding: 0 0 15px 0;
  }
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
    <SCard>
      <Wrapper>
        <STitle size="md" withoutMargin>
          Vanity Safe Generator
        </STitle>
        <Line>
          {!owner ? (
            <ConnectButton onConnect={onWeb3Connect} />
          ) : (
            <EthHashInfo
              hash={owner}
              name="Safe owner:"
              showIdenticon
              identiconSize="lg"
              textSize="xl"
              showCopyBtn
              showEtherscanBtn
              shortenHash={4}
            />
          )}
        </Line>
      </Wrapper>
    </SCard>
  )
}

export default Header

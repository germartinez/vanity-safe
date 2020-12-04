import { EthHashInfo, Text, Title } from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import Web3Adapter from '../../logic/Web3Adapter'
import { LineCenter, SCard } from '../../styles/commonElements'
import ConnectButton from './ConnectButton'

const STitle = styled(Title)`
  display: flex;
  justify-content: center;
  color: #008c73;
`

interface HeaderProps {
  owner: string
  setWeb3Adapter: Function
}

const Header = ({ owner, setWeb3Adapter }: HeaderProps) => {
  const onWeb3Connect = async (provider: any) => {
    if (provider) {
      const web3 = new Web3(provider)
      setWeb3Adapter(new Web3Adapter(web3))
    }
  }

  return (
    <SCard>
      <STitle size="md">Vanity Safe Generator</STitle>
      {!owner ? (
        <ConnectButton onConnect={onWeb3Connect} />
      ) : (
        <LineCenter>
          <Text size="xl">Safe owner:</Text>
          <EthHashInfo
            hash={owner}
            showIdenticon
            identiconSize="lg"
            textSize="xl"
            showCopyBtn
            showEtherscanBtn
          />
        </LineCenter>
      )}
    </SCard>
  )
}

export default Header

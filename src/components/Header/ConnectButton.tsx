import * as React from 'react'
import styled from 'styled-components'
import Web3Connect from 'web3connect'

const {
  default: WalletConnectProvider
} = require('@walletconnect/web3-provider')

const Web3ConnectButton = styled.div`
  display: flex;
  justify-content: center;
`

type ConnectButtonProps = {
  onConnect: Function
}

const ConnectButton = ({ onConnect }: ConnectButtonProps) => (
  <Web3ConnectButton>
    <Web3Connect.Button
      providerOptions={{
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: process.env.REACT_APP_INFURA_ID
          }
        }
      }}
      onConnect={onConnect}
      onClose={() => {}}
    />
  </Web3ConnectButton>
)

export default ConnectButton

import * as React from 'react'
import styled from 'styled-components'
import Web3Connect from 'web3connect'

const {
  default: WalletConnectProvider
} = require('@walletconnect/web3-provider')

const Web3ConnectButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > div {
    padding: 0;
  }
  @media screen and (max-width: 500px) {
    & > div {
      max-width: 100%;
    }
  }
  .web3connect-connect-button {
    outline: none;
    background: #008c73;
    border: 1px solid #008c73;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    transform: none;
    padding: 0 25px;
    font-weight: normal;
    font-size: 14px;
    box-shadow: none;
  }
  .web3connect-connect-button:hover {
    background: #005546;
    box-shadow: none;
    transform: none;
  }
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

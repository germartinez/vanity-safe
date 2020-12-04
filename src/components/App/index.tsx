import {
  Button,
  EthHashInfo,
  TextField,
  Title
} from '@gnosis.pm/safe-react-components'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { defaultNetworks } from '../../config/networks'
import { calculateSafeAddress } from '../../logic/safe'
import { isValidVanitySafe } from '../../logic/vanity'
import Web3Adapter from '../../logic/Web3Adapter'
import ConnectButton from '../ConnectButton'

const Container = styled.div`
  padding: 10px;
`

interface SafeConfiguration {
  nonce: number
  owner: string
}

interface Statistics {
  attempts: number
  difficulty: number
}

const safeInitConfiguration = {
  nonce: 0,
  owner: ''
}

const initialStatistics = {
  attempts: 0,
  difficulty: 0
}

const App = () => {
  const [web3Adapter, setWeb3Adapter] = useState<Web3Adapter | undefined>(
    undefined
  )
  const [inputAddress, setInputAddress] = useState<string>('')
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [safeConfiguration, setSafeConfiguration] = useState<SafeConfiguration>(
    safeInitConfiguration
  )
  const [statistics, setStatistics] = useState<Statistics>(initialStatistics)
  const [outputAddress, setOutputAddress] = useState<string | undefined>(
    undefined
  )

  const onWeb3Connect = async (provider: any) => {
    if (provider) {
      const web3 = new Web3(provider)
      setWeb3Adapter(new Web3Adapter(web3))
    }
  }

  useEffect(() => {
    const getSafeOwner = async (web3Adapter: any) => {
      const owner = await web3Adapter.getAccount()
      setSafeConfiguration((state) => ({ ...state, owner }))
    }
    if (web3Adapter) {
      getSafeOwner(web3Adapter)
    }
  }, [web3Adapter])

  useEffect(() => {
    const difficulty = inputAddress ? Math.pow(16, inputAddress.length) : 0
    setStatistics((state) => ({ ...state, difficulty }))
  }, [inputAddress])

  useEffect(() => {
    const step = async () => {
      if (!web3Adapter) return
      if (!inputAddress) return

      const { owner, nonce } = safeConfiguration
      const network = defaultNetworks[await web3Adapter.getNetworkId()]

      const currentAddress = await calculateSafeAddress(
        web3Adapter,
        owner,
        network,
        nonce.toString()
      )

      if (
        !(await isValidVanitySafe(inputAddress, currentAddress, web3Adapter))
      ) {
        setSafeConfiguration((state) => ({
          ...safeConfiguration,
          nonce: state.nonce + 1
        }))
        setStatistics((state) => ({ ...state, attempts: state.attempts + 1 }))
      } else {
        setOutputAddress(currentAddress)
      }
    }

    if (isRunning) {
      step()
    }
  }, [web3Adapter, isRunning, inputAddress, safeConfiguration])

  return (
    <Container>
      <Title size="sm">Vanity Safe Generator</Title>
      <ConnectButton onConnect={onWeb3Connect} />
      {web3Adapter && safeConfiguration.owner && (
        <>
          <EthHashInfo
            hash={safeConfiguration.owner}
            showIdenticon
            identiconSize="lg"
            textSize="xl"
            showCopyBtn
            showEtherscanBtn
            network="rinkeby"
          />
          <br />
          <br />
          <TextField
            id="targetAddress"
            label="Safe address prefix pattern"
            value={inputAddress}
            onChange={(e: {
              target: { value: React.SetStateAction<string> }
            }) => setInputAddress(e.target.value)}
          />
          <Button
            size="md"
            color="primary"
            variant="contained"
            onClick={() => setIsRunning(true)}
          >
            Generate custom Safe address
          </Button>
          <br />
          <br />
          <br />
          <br />
          Difficulty: {statistics.difficulty}
          <br />
          <br />
          Attempts: {statistics.attempts}
          <br />
          <br />
          Address: {outputAddress}
        </>
      )}
    </Container>
  )
}

export default App

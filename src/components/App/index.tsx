import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { defaultNetworks } from '../../config/networks'
import { calculateSafeAddress } from '../../logic/safe'
import { isValidVanitySafe } from '../../logic/vanity'
import Web3Adapter from '../../logic/Web3Adapter'
import Header from '../Header'
import SearchResult from '../SearchResult'
import Settings from '../Settings'
import Statistics from '../Statistics'

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 900px;
  margin: 0 auto;
`

const Body = styled.div`
  display: flex;
  & > div {
    flex: 1 1;
  }
`

const safeInitConfiguration = {
  nonce: 0,
  owner: '',
  outputAddress: '',
  isValid: false
}

const initialStatistics = {
  attempts: 0,
  difficulty: 0,
  isRunning: false
}

const App = () => {
  const [web3Adapter, setWeb3Adapter] = useState<Web3Adapter | undefined>(
    undefined
  )
  const [inputAddress, setInputAddress] = useState('')
  const [safeConfiguration, setSafeConfiguration] = useState(
    safeInitConfiguration
  )
  const [statistics, setStatistics] = useState(initialStatistics)

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

      const { owner, nonce } = safeConfiguration
      const network = defaultNetworks[await web3Adapter.getNetworkId()]

      const address = await calculateSafeAddress(
        web3Adapter,
        owner,
        network,
        nonce.toString()
      )

      if (!(await isValidVanitySafe(inputAddress, address, web3Adapter))) {
        setSafeConfiguration((state) => ({
          ...state,
          outputAddress: address,
          nonce: state.nonce + 1
        }))
        setStatistics((state) => ({ ...state, attempts: state.attempts + 1 }))
      } else {
        setSafeConfiguration((state) => ({
          ...state,
          outputAddress: address,
          isValid: true
        }))
        setStatistics((state) => ({ ...state, isRunning: false }))
      }
    }

    if (statistics.isRunning) {
      step()
    }
  }, [web3Adapter, statistics.isRunning, inputAddress, safeConfiguration])

  const search = () => {
    setStatistics((state) => ({ ...state, attempts: 0, isRunning: true }))
    setSafeConfiguration((state) => ({
      ...state,
      nonce: 0,
      outputAddress: '',
      isValid: false
    }))
  }

  return (
    <Container>
      <Header owner={safeConfiguration.owner} setWeb3Adapter={setWeb3Adapter} />
      <Body>
        <Settings
          search={search}
          inputAddress={inputAddress}
          setInputAddress={setInputAddress}
          disabled={!safeConfiguration.owner || statistics.isRunning}
        />
        <Statistics {...statistics} />
      </Body>
      <SearchResult {...safeConfiguration} isRunning={statistics.isRunning} />
    </Container>
  )
}

export default App

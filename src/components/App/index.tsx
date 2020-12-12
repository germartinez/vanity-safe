import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { calculateSafeAddress } from '../../logic/safe'
import { isValidVanitySafe } from '../../logic/vanity'
import Header from '../Header'
import SearchResult from '../SearchResult'
import Settings from '../Settings'
import Statistics from '../Statistics'

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 950px;
  margin: 0 auto;
`

const Body = styled.div`
  display: flex;
  & > div {
    flex: 1 1;
  }
`
const initialOutputAddress = '0x????????????????????????????????????????'

const safeInitConfiguration = {
  nonce: 0,
  owner: '',
  outputAddress: initialOutputAddress,
  isValid: false
}

const initialStatistics = {
  attempts: 0,
  difficulty: 0,
  isRunning: false
}

const App = () => {
  const [web3, setWeb3] = useState<any | undefined>(undefined)
  const [inputAddress, setInputAddress] = useState('')
  const [safeConfiguration, setSafeConfiguration] = useState(
    safeInitConfiguration
  )
  const [statistics, setStatistics] = useState(initialStatistics)

  useEffect(() => {
    const getSafeOwner = async (web3: any) => {
      const owner = web3.eth.defaultAccount || (await web3.eth.getAccounts())[0]
      setSafeConfiguration((state) => ({ ...state, owner }))
    }

    if (!web3) return
    getSafeOwner(web3)
  }, [web3])

  useEffect(() => {
    const difficulty = inputAddress ? Math.pow(16, inputAddress.length) : 0
    setStatistics((state) => ({ ...state, difficulty }))
  }, [inputAddress])

  useEffect(() => {
    const step = async () => {
      if (!web3) return
      const { owner, nonce } = safeConfiguration
      const address = await calculateSafeAddress(web3, owner, nonce.toString())

      if (!(await isValidVanitySafe(inputAddress, address, web3))) {
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

    if (!statistics.isRunning) return
    step()
  }, [web3, statistics.isRunning, inputAddress, safeConfiguration])

  const search = () => {
    setStatistics((state) => ({ ...state, attempts: 0, isRunning: true }))
    setSafeConfiguration((state) => ({
      ...state,
      nonce: 0,
      outputAddress: initialOutputAddress,
      isValid: false
    }))
  }

  return (
    <Container>
      <Header owner={safeConfiguration.owner} setWeb3={setWeb3} />
      <Body>
        <Settings
          search={search}
          inputAddress={inputAddress}
          setInputAddress={setInputAddress}
          disabled={!safeConfiguration.owner || statistics.isRunning}
        />
        <Statistics {...statistics} />
      </Body>
      <SearchResult
        {...safeConfiguration}
        isRunning={statistics.isRunning}
        web3={web3}
      />
    </Container>
  )
}

export default App

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
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`

const initialOutputAddress = '0x ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?'

const searchInitialState = {
  addressPattern: '',
  isCaseSensitive: false
}

const safeInitialState = {
  nonce: 0,
  owner: '',
  outputAddress: initialOutputAddress,
  isValid: false,
  isDeploying: false,
  deployedAddress: ''
}

const statisticInitialState = {
  attempts: 0,
  difficulty: 0,
  probability: 0,
  isRunning: false
}

const App = () => {
  const [web3, setWeb3] = useState<any | undefined>(undefined)
  const [searchState, setSearchState] = useState(searchInitialState)
  const [safeState, setSafeState] = useState(safeInitialState)
  const [statisticsState, setStatisticsState] = useState(statisticInitialState)

  useEffect(() => {
    const getSafeOwner = async (web3: any) => {
      const owner = web3.eth.defaultAccount || (await web3.eth.getAccounts())[0]
      setSafeState((state) => ({ ...state, owner }))
    }

    if (!web3) return
    getSafeOwner(web3)
  }, [web3])

  useEffect(() => {
    const { addressPattern, isCaseSensitive } = searchState
    let difficulty = 0
    if (addressPattern) {
      difficulty = isCaseSensitive
        ? Math.pow(22, addressPattern.length)
        : Math.pow(16, addressPattern.length)
    }
    setStatisticsState((state) => ({ ...state, difficulty }))
  }, [searchState])

  useEffect(() => {
    const step = async () => {
      if (!web3) return
      const { owner, nonce } = safeState
      const { addressPattern, isCaseSensitive } = searchState
      const address = await calculateSafeAddress(web3, owner, nonce.toString())

      if (
        !(await isValidVanitySafe(
          addressPattern,
          isCaseSensitive,
          address,
          web3
        ))
      ) {
        setSafeState((state) => ({
          ...state,
          outputAddress: address,
          nonce: state.nonce + 1
        }))
        setStatisticsState((state) => ({
          ...state,
          attempts: state.attempts + 1,
          probability: 1 - Math.pow(1 - 1 / state.difficulty, state.attempts)
        }))
      } else {
        setSafeState((state) => ({
          ...state,
          outputAddress: address,
          isValid: true
        }))
        setStatisticsState((state) => ({ ...state, isRunning: false }))
      }
    }

    if (!statisticsState.isRunning) return
    step()
  }, [web3, statisticsState.isRunning, searchState, safeState])

  const search = () => {
    setStatisticsState((state) => ({
      ...state,
      attempts: 0,
      probability: 0,
      isRunning: true
    }))
    setSafeState((state) => ({
      ...state,
      nonce: 0,
      outputAddress: initialOutputAddress,
      isValid: false,
      isDeploying: false,
      deployedAddress: ''
    }))
  }

  return (
    <Container>
      <Header owner={safeState.owner} setWeb3={setWeb3} />
      <Body>
        <Settings
          search={search}
          {...searchState}
          setSearchState={setSearchState}
          disabled={
            !safeState.owner ||
            !searchState.addressPattern ||
            statisticsState.isRunning
          }
        />
        <Statistics {...statisticsState} />
      </Body>
      <SearchResult
        safeState={safeState}
        web3={web3}
        setSafeState={setSafeState}
      />
    </Container>
  )
}

export default App

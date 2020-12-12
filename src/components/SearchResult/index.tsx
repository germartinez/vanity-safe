import {
  Button,
  EthHashInfo,
  Loader,
  Text
} from '@gnosis.pm/safe-react-components'
import React, { useState } from 'react'
import styled from 'styled-components'
import { deploySafeContract } from '../../logic/safe'
import { Line, LineCenter, SCard } from '../../styles/commonElements'

const SLoader = styled(Loader)`
  margin-left: 5px;
`

const SLine = styled(Line)`
  float: left;
`

interface AddressBoxProps {
  opaque: boolean
}
const AddressBox = styled.div<AddressBoxProps>`
  opacity: ${(p) => (p.opaque ? 0.2 : 1)};
  min-width: 490px;
  --border: 1px solid red;
`

const ResultButtonsBox = styled.div`
  --border: 1px solid red;
  display: flex;
  justify-content: center;
  --width: 384px;
  margin: 20px auto 0;
`

const SButton = styled(Button)`
  float: right;
`

interface SafeState {
  nonce: number
  owner: string
  outputAddress: string
  isValid: boolean
  isDeploying: boolean
  deployedAddress: string
}

interface SearchResultProps {
  safeState: SafeState
  web3: any
  setSafeState: Function
}

const SearchResult = (searchResultProps: SearchResultProps) => {
  const { safeState, web3, setSafeState } = searchResultProps
  const {
    nonce,
    owner,
    outputAddress,
    isValid,
    isDeploying,
    deployedAddress
  } = safeState

  const deploySafe = async (owner: string, nonce: number) => {
    setSafeState((state: SafeState) => ({ ...state, isDeploying: true }))
    try {
      const safeAddress = await deploySafeContract(owner, nonce, web3)
      setSafeState((state: SafeState) => ({
        ...state,
        deployedAddress: safeAddress
      }))
    } catch (e) {
      setSafeState((state: SafeState) => ({ ...state, deployedAddress: '' }))
    }
    setSafeState((state: SafeState) => ({ ...state, isDeploying: false }))
  }

  return (
    <SCard>
      <LineCenter>
        <Text size="xl">Safe address:</Text>
        <AddressBox opaque={!isValid}>
          <EthHashInfo
            hash={outputAddress}
            showIdenticon
            identiconSize="lg"
            textSize="xl"
            network="rinkeby"
            showCopyBtn={isValid}
            showEtherscanBtn={isValid}
          />
        </AddressBox>
      </LineCenter>

      {isDeploying && (
        <LineCenter>
          <SLoader size="sm" />
        </LineCenter>
      )}
      {deployedAddress && (
        <LineCenter>
          <Text size="xl">Congratulations! Your Safe is ready!</Text>
        </LineCenter>
      )}
      <ResultButtonsBox>
        {!deployedAddress ? (
          <SButton
            size="lg"
            color="primary"
            variant="contained"
            onClick={() => deploySafe(owner, nonce)}
            disabled={!isValid}
          >
            Deploy Safe
          </SButton>
        ) : (
          <a
            href={`https://rinkeby.gnosis-safe.io/app/#/safes/${deployedAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            <SButton size="lg" color="primary" variant="contained">
              Open in Safe Multisig app
            </SButton>
          </a>
        )}
      </ResultButtonsBox>
    </SCard>
  )
}

export default SearchResult

/*
  {!isValid && !isRunning && (
    <LineCenter>
    </LineCenter>
  )}

  {!isValid && isRunning && (
    <LineCenter>
      <SLoader size="sm" />
    </LineCenter>
  )}

  {isValid && (
    <>
      <SLine>
        <Text size="xl">Safe address:</Text>
        <EthHashInfo
          hash={outputAddress}
          showIdenticon
          identiconSize="lg"
          textSize="xl"
          showCopyBtn
          showEtherscanBtn
        />
      </SLine>
      <SButton
        size="lg"
        color="primary"
        variant="contained"
        onClick={() => deploySafe(owner, nonce)}
      >
        Deploy Safe
      </SButton>
    </>
  )}
*/

/*
  <SCard>
    <SLine>
      <Text size="xl">Safe address:</Text>
      {isValid && (
        <EthHashInfo
          hash={outputAddress}
          showIdenticon
          identiconSize="lg"
          textSize="xl"
          showCopyBtn
          showEtherscanBtn
        />
      )}
      {isRunning && (
        <SLoader size="sm" />
      )}
    </SLine>
    <SButton
      size="lg"
      color="primary"
      variant="contained"
      onClick={() => deploySafe(owner, nonce)}
      disabled={!isValid}
    >
      Deploy Safe
    </SButton>
  </SCard>
*/

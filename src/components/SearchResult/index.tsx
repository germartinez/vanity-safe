import { Button, Loader, Text } from '@gnosis.pm/safe-react-components'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { deploySafeContract } from '../../logic/safe'
import { LineCenter, SCard, SEthHashInfo } from '../../styles/commonElements'

interface AddressBoxProps {
  opaque: boolean
}

const AddressBox = styled.div<AddressBoxProps>`
  opacity: ${(p) => (p.opaque ? 0.2 : 1)};
  min-width: 490px;
  @media screen and (max-width: 950px) {
    min-width: 100%;
    width: 100%;
  }
`

const ResultProcess = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 10px 0;
`

const SLoader = styled(Loader)`
  margin-left: 5px;
`

const Link = styled.a`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ResultButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto 0;
  .MuiButton-root {
    @media screen and (max-width: 950px) {
      width: 100%;
    }
  }
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
  const [isScreenWidthSmall, setIsScreenWidthSmall] = useState(false)
  const { safeState, web3, setSafeState } = searchResultProps
  const {
    nonce,
    owner,
    outputAddress,
    isValid,
    isDeploying,
    deployedAddress
  } = safeState

  useEffect(() => {
    if (window.innerWidth <= 650) {
      setIsScreenWidthSmall(true)
      return
    }
    setIsScreenWidthSmall(false)
  }, [isValid])

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [isDeploying])

  const deploySafe = async (owner: string, nonce: number) => {
    setSafeState((state: SafeState) => ({ ...state, isDeploying: true }))
    try {
      const safeAddress = await deploySafeContract(owner, nonce, web3)
      setSafeState((state: SafeState) => ({
        ...state,
        deployedAddress: safeAddress
      }))
    } catch (e) {
      console.error(e)
    }
    setSafeState((state: SafeState) => ({ ...state, isDeploying: false }))
  }

  return (
    <SCard>
      <LineCenter>
        <AddressBox opaque={!isValid}>
          <SEthHashInfo
            hash={outputAddress}
            name="Safe address:"
            showIdenticon
            identiconSize="lg"
            textSize="xl"
            network="rinkeby"
            showCopyBtn={isValid}
            showEtherscanBtn={isValid}
            shortenHash={isScreenWidthSmall ? 8 : 0}
          />
        </AddressBox>
      </LineCenter>
      {isDeploying && (
        <ResultProcess>
          <SLoader size="sm" />
        </ResultProcess>
      )}
      {deployedAddress && (
        <ResultProcess>
          <LineCenter>
            <Text size="xl" color="primary">
              Congratulations! Your Safe is ready!
            </Text>
          </LineCenter>
        </ResultProcess>
      )}
      <ResultButtonsBox>
        {!deployedAddress ? (
          <Button
            size="lg"
            color="primary"
            variant="contained"
            onClick={() => deploySafe(owner, nonce)}
            disabled={!isValid || isDeploying}
          >
            Deploy Safe
          </Button>
        ) : (
          <Link
            href={`https://rinkeby.gnosis-safe.io/app/#/safes/${deployedAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" color="primary" variant="contained">
              Open in Safe Multisig app
            </Button>
          </Link>
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

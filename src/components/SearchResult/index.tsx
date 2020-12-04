import { EthHashInfo, Loader, Text } from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import { LineCenter, SCard } from '../../styles/commonElements'

const SLoader = styled(Loader)`
  margin-left: 5px;
`

interface SearchResultProps {
  isValid: boolean
  outputAddress: string
  isRunning: boolean
}

const SearchResult = (searchResultProps: SearchResultProps) => {
  const { isValid, outputAddress, isRunning } = searchResultProps
  return (
    <SCard>
      <LineCenter>
        {isValid && outputAddress ? (
          <>
            <Text size="xl">Safe address:</Text>
            <EthHashInfo
              hash={outputAddress}
              showIdenticon
              identiconSize="lg"
              textSize="xl"
              showCopyBtn
              showEtherscanBtn
            />
          </>
        ) : (
          isRunning && <SLoader size="sm" />
        )}
      </LineCenter>
    </SCard>
  )
}

export default SearchResult

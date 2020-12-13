import {
  Button,
  Checkbox,
  Text,
  TextField
} from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import { Line, SCard } from '../../styles/commonElements'

const Form = styled.div`
  .MuiButton-root {
    display: block;
    margin-top: 24px;
    width: 100%;
  }
  .MuiTextField-root {
    @media screen and (max-width: 950px) {
      width: 100%;
    }
  }
`

interface SearchConfig {
  addressPattern: string
  isCaseSensitive: boolean
}

interface SettingsProps {
  search: any
  addressPattern: string
  isCaseSensitive: boolean
  saltNonce: string
  setSearchState: Function
  disabled: boolean
}

const Settings = ({
  search,
  addressPattern,
  isCaseSensitive,
  saltNonce,
  setSearchState,
  disabled
}: SettingsProps) => {
  return (
    <SCard>
      <Form>
        <Line>
          <Text size="xl">Safe address prefix:</Text>
        </Line>
        <TextField
          id="targetAddress"
          label="0x"
          value={addressPattern}
          onChange={(e) =>
            setSearchState((state: SearchConfig) => ({
              ...state,
              addressPattern: e.target.value
            }))
          }
          autoComplete="off"
        />
        <Line>
          <Checkbox
            name="checkbox"
            checked={isCaseSensitive}
            onChange={(_, checked) =>
              setSearchState((state: SearchConfig) => ({
                ...state,
                isCaseSensitive: checked
              }))
            }
            label="Case-sensitive"
          />
        </Line>
        <Line>
          <Text size="xl">Start with salt-nonce:</Text>
        </Line>
        <TextField
          id="saltNonce"
          label="Salt nonce"
          value={saltNonce}
          onChange={(e) =>
            setSearchState((state: SearchConfig) => ({
              ...state,
              saltNonce: e.target.value
            }))
          }
          autoComplete="off"
        />
        <Button
          size="lg"
          color="primary"
          variant="contained"
          onClick={search}
          disabled={disabled}
        >
          Generate custom Safe address
        </Button>
      </Form>
    </SCard>
  )
}

export default Settings

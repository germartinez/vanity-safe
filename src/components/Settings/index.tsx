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
  @media screen and (max-width: 950px) {
    text-align: center;
  }
  button {
    display: block;
    width: 100%;
  }
  .eAuvgm {
    @media screen and (max-width: 950px) {
      max-width: 100%;
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
  setSearchState: Function
  disabled: boolean
}

const Settings = ({
  search,
  addressPattern,
  isCaseSensitive,
  setSearchState,
  disabled
}: SettingsProps) => {
  return (
    <SCard>
      <Line>
        <Text size="xl">Safe address prefix:</Text>
      </Line>
      <Form>
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

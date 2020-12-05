import { Button, Text, TextField } from '@gnosis.pm/safe-react-components'
import React from 'react'
import styled from 'styled-components'
import { Line, SCard } from '../../styles/commonElements'

const Form = styled.div`
  button {
    display: block;
    margin-top: 24px;
    width: 400px;
  }
`

interface SettingsProps {
  search: any
  inputAddress: string
  setInputAddress: Function
  disabled: boolean
}

const Settings = ({
  search,
  inputAddress,
  setInputAddress,
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
          value={inputAddress}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setInputAddress(e.target.value)
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

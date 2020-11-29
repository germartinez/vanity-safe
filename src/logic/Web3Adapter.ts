import Web3ContractAdapter, { Contract } from './ContractAdapter'

type Json = string | number | boolean | null | JsonObject | Json[]

type JsonObject = { [property: string]: Json }

function joinHexData(hexData: string[]): string {
  return `0x${hexData
    .map((hex) => {
      const stripped = hex.replace(/^0x/, '')
      return stripped.length % 2 === 0 ? stripped : '0' + stripped
    })
    .join('')}`
}

class Web3Adapter {
  web3: any

  constructor(web3: any) {
    if (!web3) {
      throw new Error('web3 property missing from options')
    }
    this.web3 = web3
  }

  async getNetworkId(): Promise<number> {
    return this.web3.eth.net.getId()
  }

  async getAccount(): Promise<string> {
    return (
      this.web3.eth.defaultAccount || (await this.web3.eth.getAccounts())[0]
    )
  }

  keccak256(data: string): string {
    return this.web3.utils.keccak256(data)
  }

  abiEncode(types: string[], values: any[]): string {
    return this.web3.eth.abi.encodeParameters(types, values)
  }

  calcCreate2Address(deployer: string, salt: string, initCode: string): string {
    return this.web3.utils.toChecksumAddress(
      this.web3.utils
        .soliditySha3(
          '0xff',
          { t: 'address', v: deployer },
          { t: 'bytes32', v: salt },
          this.keccak256(initCode)
        )
        .slice(-40)
    )
  }

  getCode(address: string): Promise<string> {
    return this.web3.eth.getCode(address)
  }

  getContract(abi: JsonObject[], address: string): Contract {
    const contract = new this.web3.eth.Contract(abi, address)
    return new Web3ContractAdapter(contract)
  }

  abiEncodePacked(...params: { type: string; value: any }[]): string {
    return joinHexData(
      params.map(({ type, value }) => {
        const encoded = this.abiEncode([type], [value])

        if (type === 'bytes' || type === 'string') {
          const bytesLength = parseInt(encoded.slice(66, 130), 16)
          return encoded.slice(130, 130 + 2 * bytesLength)
        }

        let typeMatch = type.match(/^(?:u?int\d*|bytes\d+|address)\[\]$/)
        if (typeMatch) {
          return encoded.slice(130)
        }

        if (type.startsWith('bytes')) {
          const bytesLength = parseInt(type.slice(5))
          return encoded.slice(2, 2 + 2 * bytesLength)
        }

        typeMatch = type.match(/^u?int(\d*)$/)
        if (typeMatch) {
          if (typeMatch[1] !== '') {
            const bytesLength = parseInt(typeMatch[1]) / 8
            return encoded.slice(-2 * bytesLength)
          }
          return encoded.slice(-64)
        }

        if (type === 'address') {
          return encoded.slice(-40)
        }

        throw new Error(`unsupported type ${type}`)
      })
    )
  }
}

export default Web3Adapter

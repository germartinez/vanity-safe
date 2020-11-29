import Web3Adapter from './Web3Adapter'

export const isValidVanitySafe = async (
  inputAddress: string,
  address: string,
  web3Adapter: Web3Adapter
): Promise<boolean> => {
  const subStr = address.substr(2, inputAddress.length)

  if (inputAddress.toLowerCase() !== subStr.toLowerCase()) {
    return false
  }

  return (await web3Adapter.getCode(address)) === '0x'
}

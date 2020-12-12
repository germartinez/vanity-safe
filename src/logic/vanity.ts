import Web3 from 'web3'

export const isValidVanitySafe = async (
  inputAddress: string,
  address: string,
  web3: Web3
): Promise<boolean> => {
  const subStr = address.substr(2, inputAddress.length)

  if (inputAddress.toLowerCase() !== subStr.toLowerCase()) {
    return false
  }

  return (await web3.eth.getCode(address)) === '0x'
}

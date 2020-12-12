import Web3 from 'web3'

export const isValidVanitySafe = async (
  addressPattern: string,
  isCaseSensitive: boolean,
  address: string,
  web3: Web3
): Promise<boolean> => {
  const subStrAddress = address.substr(2, addressPattern.length)

  if (
    !isCaseSensitive &&
    addressPattern.toLowerCase() !== subStrAddress.toLowerCase()
  ) {
    return false
  }
  if (isCaseSensitive && addressPattern !== subStrAddress) {
    return false
  }
  return (await web3.eth.getCode(address)) === '0x'
}

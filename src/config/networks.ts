export interface NetworkConfigEntry {
  masterCopyAddress: string
  proxyFactoryAddress: string
  fallbackHandlerAddress: string
}

export interface NetworksConfig {
  [id: string]: NetworkConfigEntry
}

export const defaultNetworks: NetworksConfig = {
  // mainnet
  1: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
    fallbackHandlerAddress: '0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44'
  },
  // rinkeby testnet
  4: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
    fallbackHandlerAddress: '0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44'
  },
  // goerli testnet
  5: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
    fallbackHandlerAddress: '0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44'
  },
  // kovan testnet
  42: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
    fallbackHandlerAddress: '0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44'
  },
  // xdai
  100: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
    fallbackHandlerAddress: '0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44'
  },
  // energy web chain
  246: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
    fallbackHandlerAddress: '0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44'
  },
  // energy web chain volta testnet
  73799: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
    fallbackHandlerAddress: '0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44'
  }
}

export interface NetworkConfigEntry {
  masterCopyAddress: string
  proxyFactoryAddress: string
}

export interface NetworksConfig {
  [id: string]: NetworkConfigEntry
}

export const defaultNetworks: NetworksConfig = {
  // mainnet
  1: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
  },
  // rinkeby testnet
  4: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
  },
  // goerli testnet
  5: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
  },
  // kovan testnet
  42: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
  },
  // xdai
  100: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
  },
  // energy web chain
  246: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
  },
  // energy web chain volta testnet
  73799: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    proxyFactoryAddress: '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B',
  }
}

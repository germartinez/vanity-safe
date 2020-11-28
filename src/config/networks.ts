export interface NetworkConfigEntry {
  masterCopyAddress: string
  cpkFactoryAddress: string
}

export interface NetworksConfig {
  [id: string]: NetworkConfigEntry
}

export const defaultNetworks: NetworksConfig = {
  // mainnet
  1: {
    masterCopyAddress: '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F',
    cpkFactoryAddress: '0x0fB4340432e56c014fa96286de17222822a9281b'
  },
  // rinkeby
  4: {
    masterCopyAddress: '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F',
    cpkFactoryAddress: '0x336c19296d3989e9e0c2561ef21c964068657c38'
  },
  // goerli
  5: {
    masterCopyAddress: '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F',
    cpkFactoryAddress: '0xfC7577774887aAE7bAcdf0Fc8ce041DA0b3200f7'
  },
  // kovan
  42: {
    masterCopyAddress: '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F',
    cpkFactoryAddress: '0xfC7577774887aAE7bAcdf0Fc8ce041DA0b3200f7'
  },
  // xdai
  100: {
    masterCopyAddress: '0x6851D6fDFAfD08c0295C392436245E5bc78B0185',
    cpkFactoryAddress: '0xfC7577774887aAE7bAcdf0Fc8ce041DA0b3200f7'
  }
}

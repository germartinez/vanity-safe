import cpkFactoryAbi from '../abis/CpkFactoryAbi.json'
import { NetworkConfigEntry } from '../config/networks'
import Web3Adapter from './Web3Adapter'

const getCPKSalt = (web3Adapter: any, ownerAccount: string, nonce: string) =>
  web3Adapter.keccak256(
    web3Adapter.abiEncode(['address', 'uint256'], [ownerAccount, nonce])
  )

const getInitCode = async (
  web3Adapter: any,
  proxyFactory: any,
  masterCopyAddress: any
): Promise<string> =>
  web3Adapter.abiEncodePacked(
    { type: 'bytes', value: await proxyFactory.call('proxyCreationCode', []) },
    {
      type: 'bytes',
      value: web3Adapter.abiEncode(['address'], [masterCopyAddress])
    }
  )

export const calculateSafeAddress = async (
  web3Adapter: Web3Adapter,
  ownerAccount: string,
  network: NetworkConfigEntry,
  nonce: string
): Promise<string> => {
  const proxyFactory = web3Adapter.getContract(
    cpkFactoryAbi,
    network.cpkFactoryAddress
  )

  const proxyAddress = web3Adapter.calcCreate2Address(
    proxyFactory.address,
    getCPKSalt(web3Adapter, ownerAccount, nonce),
    await getInitCode(web3Adapter, proxyFactory, network.masterCopyAddress)
  )

  return proxyAddress
}

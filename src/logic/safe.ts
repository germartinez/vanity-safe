import abi from 'ethereumjs-abi'
import { generateAddress2 } from 'ethereumjs-util/dist/account'
import { toBuffer } from 'ethereumjs-util/dist/bytes'
import { keccak256 } from 'ethereumjs-util/dist/hash'
import Web3 from 'web3'
import GnosisSafeAbi from '../abis/GnosisSafeAbi.json'
import GnosisSafeProxyFactoryAbi from '../abis/GnosisSafeProxyFactoryAbi.json'
import { defaultNetworks, NetworkConfigEntry } from '../config/networks'
import { zeroAddress } from '../utils'
const TruffleContract = require('@truffle/contract')

let safeMasterCopy: any
let safeProxyFactory: any

interface SafeContractsResult {
  masterCopy: any
  proxyFactory: any
}

const getSafeContracts = async (
  web3: Web3,
  network: NetworkConfigEntry
): Promise<SafeContractsResult> => {
  if (!safeMasterCopy || !safeMasterCopy) {
    const GnosisSafe = TruffleContract({ abi: GnosisSafeAbi })
    GnosisSafe.setProvider(web3.currentProvider)
    safeMasterCopy = await GnosisSafe.at(network.masterCopyAddress)

    const ProxyFactory = TruffleContract({ abi: GnosisSafeProxyFactoryAbi })
    ProxyFactory.setProvider(web3.currentProvider)
    safeProxyFactory = await ProxyFactory.at(network.proxyFactoryAddress)
  }

  return { masterCopy: safeMasterCopy, proxyFactory: safeProxyFactory }
}

const getGnosisSafeData = async (
  masterCopy: any,
  ownerAccount: string,
  network: NetworkConfigEntry
): Promise<string> => {
  const gnosisSafeFata = await masterCopy.contract.methods
    .setup(
      [ownerAccount],
      1,
      zeroAddress,
      '0x',
      network.fallbackHandlerAddress,
      zeroAddress,
      0,
      zeroAddress
    )
    .encodeABI()

  return gnosisSafeFata
}

export const calculateSafeAddress = async (
  web3: Web3,
  ownerAccount: string,
  nonce: string
): Promise<string> => {
  const network = defaultNetworks[await web3.eth.net.getId()]
  const { masterCopy, proxyFactory } = await getSafeContracts(web3, network)

  const creationData = await getGnosisSafeData(
    masterCopy,
    ownerAccount,
    network
  )
  const encodedNonce = abi.rawEncode(['uint256'], [nonce]).toString('hex')

  const proxyCreationCode = await proxyFactory.proxyCreationCode()
  const constructorData = abi
    .rawEncode(['address'], [masterCopy.address])
    .toString('hex')

  const from = toBuffer(proxyFactory.address)
  const salt = keccak256(
    toBuffer(
      '0x' + keccak256(toBuffer(creationData)).toString('hex') + encodedNonce
    )
  )
  const initCode = toBuffer(proxyCreationCode + constructorData)
  const proxyAddress =
    '0x' + generateAddress2(from, salt, initCode).toString('hex')

  return web3.utils.toChecksumAddress(proxyAddress)
}

export const deploySafeContract = async (
  ownerAccount: string,
  nonce: number,
  web3: Web3
) => {
  const network = defaultNetworks[await web3.eth.net.getId()]
  const { masterCopy, proxyFactory } = await getSafeContracts(web3, network)

  const creationData = await getGnosisSafeData(
    masterCopy,
    ownerAccount,
    network
  )

  const tx = await proxyFactory.createProxyWithNonce(
    masterCopy.address,
    creationData,
    nonce,
    {
      from: ownerAccount
    }
  )

  const deployedSafeAddress = '0x' + tx.receipt.rawLogs[0].data.substr(-40)
  return deployedSafeAddress
}

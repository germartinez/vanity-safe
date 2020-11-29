interface GasLimitOptions {
  gas?: number
  gasLimit?: number
}

interface CallOptions extends GasLimitOptions {
  gasPrice?: number
  from?: string
}

export interface Contract {
  address: string
  call(methodName: string, params: any[], options?: CallOptions): Promise<any>
}

type NormalizeGas<T> = Pick<T, Exclude<keyof T, 'gasLimit'>>

function normalizeGasLimit<T extends GasLimitOptions>(
  options: T
): NormalizeGas<T> {
  const { gas, gasLimit, ...rest } = options
  if (gas != null && gasLimit != null) {
    throw new Error(`specified both gas and gasLimit on options: ${options}`)
  }
  return {
    ...rest,
    gas: gas || gasLimit
  } as NormalizeGas<T>
}

class Web3ContractAdapter implements Contract {
  constructor(public contract: any) {}

  get address(): string {
    return this.contract.options.address
  }

  call(methodName: string, params: any[], options?: CallOptions): Promise<any> {
    return this.contract.methods[methodName](...params).call(
      options && normalizeGasLimit(options)
    )
  }
}

export default Web3ContractAdapter

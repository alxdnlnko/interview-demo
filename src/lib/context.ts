import { createContext as _createContext, useContext } from 'react'


export const createContext = <A extends {} | null>() => {
  const context = _createContext<A|undefined>(undefined)
  const useCtx = () => {
    const ctx = useContext(context)
    if (ctx === undefined) {
      throw new Error('useContext must be inside a Provider with a value')
    }
    return ctx
  }
  return [ useCtx, context.Provider ] as const
}

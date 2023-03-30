import { useSearchParams } from 'react-router-dom'
import { useCallback } from 'react'
import store, { IStore } from 'store/index'

const useGetSelection = () => {
  const [param] = useSearchParams()
  const selectorFn = useCallback(
    (state: IStore) =>
      Object.keys(state.selection).reduce((acc, cur) => {
        if (param.get(cur) || state.selection[cur] || cur === 'needCompanion') {
          const value = param.get(cur) || state.selection[cur]
          const obj = {
            [cur]: cur === 'needCompanion' ? value === 'true' : value,
          }
          console.log(obj)
          return {
            ...acc,
            ...obj,
          }
        }
        return { ...acc }
      }, {}),
    [],
  )

  return store(selectorFn, (a, b) => JSON.stringify(a) === JSON.stringify(b))
}

export default useGetSelection

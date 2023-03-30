import { useCallback } from 'react'
import store, { IStore } from 'store/index'

const useGetSelection = () => {
  const selectorFn = useCallback(
    (state: IStore) =>
      Object.keys(state.selection).reduce((acc, cur) => {
        if (state.selection[cur] || cur === 'needCompanion') {
          return { ...acc, [cur]: state.selection[cur] }
        }
        return { ...acc }
      }, {}),
    [],
  )

  return store(selectorFn, (a, b) => JSON.stringify(a) === JSON.stringify(b))
}

export default useGetSelection

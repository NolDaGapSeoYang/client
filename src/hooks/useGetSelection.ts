import { useSearchParams } from 'react-router-dom'
import { useCallback } from 'react'
import store, { IStore } from 'store/index'

const useGetSelection = () => {
  const [param] = useSearchParams()
  const selectorFn = useCallback(
    (state: IStore) =>
      Object.keys(state.selection).reduce((acc, cur) => {
        if (cur === 'categories') {
          let categories = param.get(cur) || state.selection[cur]
          if (typeof categories === 'string') {
            categories = categories.split(',')
          }
          return {
            ...acc,
            [cur]: categories,
          }
        } else if (
          param.get(cur) === 'true' ||
          state.selection[cur] === 'true' ||
          cur === 'needCompanion'
        ) {
          const value = (param.get(cur) || state.selection[cur]) === 'true'
          const obj = {
            [cur]: value,
          }
          if (cur === 'needCompanion') {
            return {
              ...acc,
              [cur]: !!(param.get(cur) || state.selection[cur]),
            }
          }
          if (value) {
            return {
              ...acc,
              ...obj,
            }
          }
        }
        return { ...acc }
      }, {}),
    [],
  )

  return store(selectorFn, (a, b) => JSON.stringify(a) === JSON.stringify(b))
}

export default useGetSelection

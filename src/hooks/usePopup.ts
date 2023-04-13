import { useCallback } from 'react'
import store, { ID, Popup, Store } from 'store/index'

export const usePopupSelector = () => {
  const seletorFunction = useCallback((state: Store) => {
    return [state.popup, state.setShowPopup] as [Popup, (flag: { show: boolean; id?: ID }) => void]
  }, [])

  return store(seletorFunction, (a, b) => a[0].id === b[0].id)
}

const usePopup = (): [Popup, (flag: { show: boolean; id?: ID }) => void] => {
  const [showPopup, setShowPopup] = usePopupSelector()

  return [showPopup, setShowPopup]
}

export default usePopup

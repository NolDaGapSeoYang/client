import { getIsMobile } from './../utils/index'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IStore {
  isMobile: boolean
  toggle: boolean
  position?: GeolocationPosition | null
  setToggle: (flag?: boolean) => void
  setPosition: (p: GeolocationPosition) => void
}

const store = create<IStore>()(
  persist(
    (set) => ({
      isMobile: getIsMobile(),
      toggle: false,
      position: null,
      setPosition: (position: GeolocationPosition) => set((state) => ({ ...state, position })),
      setToggle: (flag) => {
        set((state) => ({ ...state, toggle: flag !== undefined ? flag : !state.toggle }))
      },
    }),

    {
      name: 'uhdre-gamdi',
      storage: createJSONStorage(() => localStorage),
      merge(persistedState: any, currentState) {
        console.log(getIsMobile(), 'getIsMobile()')
        return {
          ...persistedState,
          ...currentState,
          isMobile: getIsMobile(),
          toggle: false,
        }
      },
    },
  ),
)

export default store

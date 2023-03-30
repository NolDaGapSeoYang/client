import { getIsMobile } from './../utils/index'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IStore {
  isMobile: boolean
  toggle: boolean
  position?: GeolocationPosition | null
  setToggle: () => void
  setPosition: (p: GeolocationPosition) => void
}

const store = create<IStore>()(
  persist(
    (set) => ({
      isMobile: getIsMobile(),
      toggle: true,
      position: null,
      setPosition: (position: GeolocationPosition) => set((state) => ({ ...state, position })),
      setToggle: () => {
        set((state) => ({ ...state, toggle: !state.toggle }))
      },
    }),

    {
      name: 'uhdre-gamdi',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default store

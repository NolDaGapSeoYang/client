import { getIsMobile } from './../utils/index'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IStore {
  isMobile: boolean
  toggle: boolean
  setToggle: () => void
}

const store = create<IStore>()(
  persist(
    (set) => ({
      isMobile: getIsMobile(),
      toggle: true,
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

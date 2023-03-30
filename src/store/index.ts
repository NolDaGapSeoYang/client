import { getIsMobile } from './../utils/index'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface IStore {
  isMobile: boolean
  toggle: boolean
  selection: {
    categories: string[] | null
    parkingAvailable: boolean
    wheelChairRentable: boolean
    elevatorAvailable: boolean
    toiletAvailable: boolean
    pathExists: boolean
    needCompanion: boolean
  }
  position?: GeolocationPosition | null
  setToggle: (flag?: boolean) => void
  setPosition: (p: GeolocationPosition) => void
}

interface Store extends IStore {}

const store = create<Store>()(
  persist(
    (set) => ({
      isMobile: getIsMobile(),
      toggle: false,
      position: null,
      selection: {
        categories: null,
        parkingAvailable: false,
        wheelChairRentable: false,
        elevatorAvailable: false,
        toiletAvailable: false,
        pathExists: false,
        needCompanion: false,
      },
      setPosition: (position: GeolocationPosition) => set((state) => ({ ...state, position })),
      setToggle: (flag) => {
        set((state) => ({ ...state, toggle: flag !== undefined ? flag : !state.toggle }))
      },
    }),

    {
      name: 'uhdre-gamdi',
      storage: createJSONStorage(() => localStorage),
      merge(persistedState: any, currentState) {
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

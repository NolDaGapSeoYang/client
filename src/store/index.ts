import { getIsMobile } from './../utils/index'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface Selection {
  categories: string[] | null
  parkingAvailable: boolean
  wheelChairRentable: boolean
  elevatorAvailable: boolean
  toiletAvailable: boolean
  pathExists: boolean
  needCompanion: boolean
}

export interface IStore {
  isMobile: boolean
  toggle: boolean
  myName: string
  sharedName: string
  selection: Selection
  setSelection: (selection: Partial<Selection>) => void
  setName: ({ key, value }: { key: 'myName' | 'sharedName'; value: string }) => void
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
      myName: '어드미',
      sharedName: '어드미',
      setName: (options) => set((state) => ({ ...state, [options.key]: options.value })),
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
      setSelection: (selection) => {
        set((state) => ({ ...state, selection: { ...state.selection, ...selection } }))
      },
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

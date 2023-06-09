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
export interface Popup {
  show: boolean
  id: ID
}
export type ID = null | string | number
export interface IStore {
  isMobile: boolean
  toggle: boolean
  myName: string
  sharedName: string
  isToastOpen: boolean
  setIsToastOpen: (flag: boolean) => void
  selection: Selection
  setSelection: (selection: Partial<Selection>) => void
  setName: ({ key, value }: { key: 'myName' | 'sharedName'; value: string }) => void
  position?: GeolocationPosition | null
  setToggle: (flag?: boolean) => void
  setPosition: (p: GeolocationPosition) => void
  popup: Popup
  setShowPopup: (flag: { show: boolean; id?: ID }) => void
}

export interface Store extends IStore {}

const store = create<Store>()(
  persist(
    (set) => ({
      isMobile: getIsMobile(),
      toggle: false,
      isToastOpen: false,
      setIsToastOpen: (flag: boolean) => set((state) => ({ ...state, isToastOpen: flag })),
      position: null,
      myName: '',
      sharedName: '',
      popup: {
        show: false,
        id: null,
      },
      setShowPopup: (flag) => {
        set((state) => ({
          ...state,
          popup: { ...flag, id: flag.id || null },
        }))
      },
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

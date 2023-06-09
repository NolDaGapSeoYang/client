import { Coord } from 'types/kakaoMap'

export const getIsMobile = () => /Android|iPhone/i.test(navigator.userAgent)

export const getDistance = (distance: number) => `약 ${Math.round(distance / 1000) / 10}km`

export const linkToKaKaoMap = (coord: Coord) => {
  const isMobile = getIsMobile()
  if (isMobile) {
    window.open(`kakaomap://route?ep=${coord.latitude},${coord.longitude}&by=CAR`)
  }
}

import { gql } from '@apollo/client'

export const placeInfoFragment = gql`
  fragment PlaceInfo on Place {
    parkingAvailable
    parkingCount
    wheelChairRentable
    elevatorAvailable
    toiletAvailable
    pathExists
    pathDescription
    latitude
    longitude
    etc
    basicInfo
    category
    id
  }
`

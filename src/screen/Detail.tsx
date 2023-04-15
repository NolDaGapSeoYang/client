import { GetPlaceQuery } from 'api/graphql'
import { Phone, Navigation, Check, Exclamation } from '../assets/svg'
import serviceIcon from '../assets/serviceIcon'
import {
  Button,
  CircleBadge,
  PopupTitle,
  Subscription,
  TopButtons,
} from 'components/Search/DestinationCard'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from 'routes/Router'
import styled from 'styled-components'
import { getDistance, linkToKaKaoMap } from 'utils/index'

import { gql, useQuery } from '@apollo/client'
import PopupButton from 'components/common/PopupButton'

const getPlace = gql`
  query getPlace($id: String!) {
    place(id: $id) {
      id
      images
      name
      distance
      address
      thumbnails
      wheelChairRentable
      elevatorAvailable
      toiletAvailable
      pathExists
      parkingAvailable
      parkingCount
      pathDescription
      etc
      basicInfo
      latitude
      longitude
      metadata {
        id
        key
        value
      }
      tel
    }
  }
`

const Detail = () => {
  const navigate = useNavigate()
  const param = useParams() as { id: string }
  if (!param?.id) {
    navigate(-1)
    return <></>
  }
  const { data: { place } = {}, loading } = useQuery<GetPlaceQuery>(getPlace, {
    variables: { id: param.id },
    notifyOnNetworkStatusChange: true,
  })
  return loading ? (
    <Loading text='결과를 불러오고 있어요..' page={false} />
  ) : (
    <Wrapper>
      <Header>
        <svg
          width='12'
          height='22'
          viewBox='0 0 12 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            navigate(-1)
          }}
        >
          <path
            d='M9.62212 21.5646L0.304164 11.8127C0.193565 11.6966 0.11504 11.5708 0.0685884 11.4354C0.0221368 11.2999 -0.000720045 11.1548 1.72812e-05 11C1.72812e-05 10.8452 0.0228742 10.7001 0.0685884 10.5646C0.114303 10.4292 0.192828 10.3034 0.304164 10.1873L9.62212 0.406332C9.88019 0.135444 10.2028 0 10.5899 0C10.977 0 11.3088 0.145119 11.5853 0.435356C11.8618 0.725594 12 1.0642 12 1.45119C12 1.83817 11.8618 2.17678 11.5853 2.46702L3.45623 11L11.5853 19.533C11.8433 19.8039 11.9724 20.1378 11.9724 20.5349C11.9724 20.9319 11.8341 21.2752 11.5576 21.5646C11.2811 21.8549 10.9585 22 10.5899 22C10.2212 22 9.89862 21.8549 9.62212 21.5646Z'
            fill='#61646B'
          />
        </svg>
        <h1>{place?.name}</h1>
      </Header>
      <Top>
        <ImageLayer>
          {place?.images.slice(0, 3).map((item) => (
            <Image key={item} src={item} />
          ))}
        </ImageLayer>
        <Description>
          <Distance>나와의 거리 {getDistance(place?.distance)}</Distance>
          <Address>{place?.address.replace('제주특별자치도', '').trim()}</Address>
          <TopButtons style={{ padding: '1rem 0' }}>
            <button
              onClick={() =>
                linkToKaKaoMap({
                  latitude: place.latitude,
                  longitude: place.longitude,
                })
              }
            >
              <Navigation />
              길안내
            </button>
            <a href={`tel:${place.tel}`}>
              <Phone />
              전화하기
            </a>
          </TopButtons>
        </Description>
      </Top>
      <Bottom>
        <IconWrapper>
          {place.parkingAvailable ? (
            // <PopupButton
            //   label={place.id}
            //   toolTip={
            //     !place.parkingCount ? (
            //       <>
            //         <Exclamation />
            //         <div>
            //           <PopupTitle>장애인 주차장</PopupTitle>
            //           <Subscription red>
            //             정확한 주차 가능대수는 알 수 없어요 :(
            //             <br />
            //             전화 문의 부탁드립니다.
            //           </Subscription>
            //         </div>
            //       </>
            //     ) : (
            //       <>
            //         <Check />
            //         <div>
            //           <PopupTitle>장애인 주차장</PopupTitle>
            //           <Subscription>주차 가능대수는 {place.parkingCount}대 입니다.</Subscription>
            //         </div>
            //       </>
            //     )
            //   }
            // >
            //   <CircleBadge>{place.parkingCount ? `${place.parkingCount}` : '?'}</CircleBadge>
            //   <serviceIcon.ParkingAvailable />
            // </PopupButton>
            <Button>
              <serviceIcon.ParkingAvailable />
            </Button>
          ) : null}
          {place.wheelChairRentable ? (
            <Button>
              <serviceIcon.WheelChairRentable />
            </Button>
          ) : null}
          {place.toiletAvailable ? (
            <Button>
              <serviceIcon.ToiletAvailable />
            </Button>
          ) : null}
          {place.pathExists ? (
            <Button>
              <serviceIcon.PathExists />
            </Button>
          ) : null}
          {place.elevatorAvailable ? (
            <Button>
              <serviceIcon.ElevatorAvailable />
            </Button>
          ) : null}
        </IconWrapper>
        <SubScript>
          {place.pathDescription && (
            <Desc>
              <h1 className='title-medium main-text'>경로 설명</h1>
              <p>{place.pathDescription}</p>
            </Desc>
          )}

          {place.etc && (
            <Desc>
              <h1 className='title-medium main-text'>참고</h1>
              <p>{place.etc}</p>
            </Desc>
          )}
        </SubScript>
      </Bottom>
    </Wrapper>
  )
}

export default Detail

const Top = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`

const Bottom = styled.div``
const SubScript = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  > div {
    p {
      font-size: 1.3rem;
      line-height: 2.1rem;
    }
  }
`
const IconWrapper = styled.div`
  display: flex;
  column-gap: 1.6rem;
  padding: 2rem 0;
  justify-content: space-around;
`

const Description = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid #efeff0;
`

const Desc = styled.div``

const Distance = styled.p`
  font-size: 2.5rem;
  line-height: 4rem;
  color: #4db495;
`

const Address = styled.p`
  font-size: 1.7rem;
  line-height: 3rem;
`

const ImageLayer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  border-radius: 1.2rem;
  gap: 0.25rem;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: cover;

  aspect-ratio: 4/3;
  &:first-child {
    grid-column: 1 / span 2;
    grid-row: 1 / spoan 2;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1rem;
  svg {
    width: 1.8rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
`

const Wrapper = styled.section`
  padding: 4rem 2rem;
  padding-top: 6rem;
`

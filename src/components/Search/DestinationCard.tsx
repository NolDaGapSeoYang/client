import { ReactComponent as Navigation } from 'assets/navigation.svg';
import { ReactComponent as Phone } from 'assets/phone.svg';
import serviceIcon from 'assets/serviceIcon';
import { ReactComponent as WheelChair } from 'assets/wheelchair.svg';
import { motion, useInView } from 'framer-motion';
import { FC, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import store from 'store/index';
import styled from 'styled-components';
import { getDistance, linkToKaKaoMap } from 'utils/index';

const DestinationCard: FC<any> = ({ node, maxLength, idx, fetchMore }) => {
  const ref = useRef(null)
  const setIsToggleOpen = store((state) => state.setIsToastOpen)
  const inView = useInView(ref, { once: true })
  const isLast = useMemo(() => maxLength === idx + 1, [idx, maxLength])
  useEffect(() => {
    if (isLast && inView) {
      fetchMore()
    }
  }, [isLast, inView])
  const navigate = useNavigate()
  return (
    <Destination
      ref={ref}
      onClick={() => {
        navigate(node.id)
      }}
    >
      <Top className='scrollbar-hide'>
        <PlaceHolderWrapper>
          <img src={node.thumbnails[0]} />
        </PlaceHolderWrapper>
        <LocationWrapper>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 className='title-medium text-bold'>{node.name}</h4>
            <span className='title-small main-text'>나와의 거리 {getDistance(node.distance)}</span>
            <Address
              className='body-small2 text-subdark'
              onClick={() => {
                window.navigator.clipboard.writeText(node.address).then(() => {
                  setIsToggleOpen(true)
                })
              }}
            >
              {node.address
                .split(' ')
                .filter((_, i) => i !== 0)
                .join(' ')}
            </Address>
          </div>
          <TopButtons>
            <button
              onClick={() =>
                linkToKaKaoMap({
                  latitude: node.latitude,
                  longitude: node.longitude,
                })
              }
            >
              <Navigation />
              길안내
            </button>
            <a href={`tel:${node.tel}`}>
              <Phone />
              전화하기
            </a>
          </TopButtons>
        </LocationWrapper>
      </Top>
      <BottomButtons className='scrollbar-hide'>
        {node.parkingAvailable ? (
          <Button>
            <img src={serviceIcon.parkingAvailable} />
          </Button>
        ) : null}
        {node.wheelChairRentable ? (
          <Button>
            <img src={serviceIcon.wheelChairRentable} />
          </Button>
        ) : null}
        {node.toiletAvailable ? (
          <Button>
            <img src={serviceIcon.toiletAvailable} />
          </Button>
        ) : null}
        {node.pathExists ? (
          <Button>
            <img src={serviceIcon.pathExists} />
          </Button>
        ) : null}
        {node.elevatorAvailable ? (
          <Button>
            <img src={serviceIcon.elevatorAvailable} />
          </Button>
        ) : null}
      </BottomButtons>
    </Destination>
  )
}

export default DestinationCard
const Destination = styled(motion.div)`
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  > div:first-child {
    padding-bottom: 1.2rem;
    border-bottom: 1px solid #efeff0;
    overflow-x: scroll;
  }
  > div:last-child {
    margin-top: 1.2rem;
    overflow-x: scroll;
  }
`

const Location = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const LocationWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 1rem;
`

const PlaceHolderWrapper = styled.div`
  border-radius: 1.5rem;
  aspect-ratio: 1/1;
  width: 10rem;
  height: 10rem;

  display: flex;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const TopButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  button,
  a {
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #efeff0;
    column-gap: 0.5rem;
    flex: 1;
    border-radius: 999rem;
  }
`
const Top = styled.div`
  display: flex;
  column-gap: 1.5rem;
`
const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* justify-content: space-around; */
`

const BottomButtons = styled(Buttons)`
  /* justify-content: space-around; */
`

const Address = styled.span`
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: inherit;
`

export const Button = styled.button`
  width: 4.6rem;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeff0;
  border-radius: 999rem;
  margin: 0 auto;
`

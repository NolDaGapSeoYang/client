import styled from 'styled-components'
import { ReactComponent as Placeholder } from 'assets/placeholder.svg'
import { ReactComponent as LocationIcon } from 'assets/location.svg'
import { useSearchParams } from 'react-router-dom'
const Search = () => {
  return (
    <div style={{ position: 'relative' }}>
      <h3 style={{ fontSize: '2.2rem' }}>@개의 여행지를 추천드려요.</h3>
      <Stickable>
        <FilterList className='scrollbar-hide'>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((item) => (
            <FilterItem key={item}>{item}</FilterItem>
          ))}
        </FilterList>
      </Stickable>
      <DestinationList>
        <Destination>
          <div style={{ display: 'flex', columnGap: '1rem' }}>
            <PlaceHolderWrapper>
              {/* <Tag>보호자 동행</Tag> */}
              <Placeholder />
            </PlaceHolderWrapper>
            <LocationWrapper>
              <div>
                <h4 style={{ fontSize: '14px' }}>장소명</h4>
                <Location>
                  <LocationIcon />
                  <span>제주시 무슨주소</span>
                </Location>
              </div>
              <Buttons>
                <Button>1</Button>
                <Button>1</Button>
              </Buttons>
            </LocationWrapper>
          </div>
          <BottomButtons>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
          </BottomButtons>
        </Destination>
        <Destination>
          <div style={{ display: 'flex', columnGap: '1rem' }}>
            <PlaceHolderWrapper>
              {/* <Tag>보호자 동행</Tag> */}
              <Placeholder />
            </PlaceHolderWrapper>
            <LocationWrapper>
              <div>
                <h4 style={{ fontSize: '14px' }}>장소명</h4>
                <Location>
                  <LocationIcon />
                  <span>제주시 무슨주소</span>
                </Location>
              </div>
              <Buttons>
                <Button>1</Button>
                <Button>1</Button>
              </Buttons>
            </LocationWrapper>
          </div>
          <BottomButtons>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
          </BottomButtons>
        </Destination>
        <Destination>
          <div style={{ display: 'flex', columnGap: '1rem' }}>
            <PlaceHolderWrapper>
              {/* <Tag>보호자 동행</Tag> */}
              <Placeholder />
            </PlaceHolderWrapper>
            <LocationWrapper>
              <div>
                <h4 style={{ fontSize: '14px' }}>장소명</h4>
                <Location>
                  <LocationIcon />
                  <span>제주시 무슨주소</span>
                </Location>
              </div>
              <Buttons>
                <Button>1</Button>
                <Button>1</Button>
              </Buttons>
            </LocationWrapper>
          </div>
          <BottomButtons>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
          </BottomButtons>
        </Destination>
        <Destination>
          <div style={{ display: 'flex', columnGap: '1rem' }}>
            <PlaceHolderWrapper>
              {/* <Tag>보호자 동행</Tag> */}
              <Placeholder />
            </PlaceHolderWrapper>
            <LocationWrapper>
              <div>
                <h4 style={{ fontSize: '14px' }}>장소명</h4>
                <Location>
                  <LocationIcon />
                  <span>제주시 무슨주소</span>
                </Location>
              </div>
              <Buttons>
                <Button>1</Button>
                <Button>1</Button>
              </Buttons>
            </LocationWrapper>
          </div>
          <BottomButtons>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
          </BottomButtons>
        </Destination>
        <Destination>
          <div style={{ display: 'flex', columnGap: '1rem' }}>
            <PlaceHolderWrapper>
              {/* <Tag>보호자 동행</Tag> */}
              <Placeholder />
            </PlaceHolderWrapper>
            <LocationWrapper>
              <div>
                <h4 style={{ fontSize: '14px' }}>장소명</h4>
                <Location>
                  <LocationIcon />
                  <span>제주시 무슨주소</span>
                </Location>
              </div>
              <Buttons>
                <Button>1</Button>
                <Button>1</Button>
              </Buttons>
            </LocationWrapper>
          </div>
          <BottomButtons>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
          </BottomButtons>
        </Destination>
      </DestinationList>
    </div>
  )
}

export default Search
const Stickable = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`
const Buttons = styled.div`
  display: flex;
  column-gap: 1.6rem;
  /* justify-content: space-around; */
`

const BottomButtons = styled(Buttons)`
  justify-content: space-around;
`

const Button = styled.button`
  width: 4.4rem;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 999rem;
`
const Tag = styled.div`
  position: absolute;
  padding: 0.4rem 0.7rem;
  border-radius: 0.5rem;
  margin: 1rem;
  right: 0;
  top: 0;
  color: white;
  background-color: #333;
`

const Location = styled.div`
  display: flex;
  color: gray;
  font-size: 12px;
  column-gap: 0.5rem;
`

const LocationWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 1rem;
`

const PlaceHolderWrapper = styled.div`
  padding: 1rem;
  border: 1px solid #333;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  aspect-ratio: 1/1;
  flex: 0.65;
`

const DestinationList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`
const FilterList = styled.div`
  display: flex;
  column-gap: 0.75rem;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 1.5rem 2rem;
  margin: 1.5rem 0;
  position: relative;
  background-color: white;
  left: -2rem;
  width: 100vw;
  overflow-x: scroll;
`
const FilterItem = styled.div`
  font-size: 1.7rem;
  padding: 0.25rem 0;
  width: 7rem;
  text-align: center;
  background-color: gray;
  border-radius: 999rem;
`

const Destination = styled.div`
  border: 1px solid #efeff0;
  padding: 1rem;
  border-radius: 1rem;
  row-gap: 1.5rem;
  display: flex;
  flex-direction: column;
`

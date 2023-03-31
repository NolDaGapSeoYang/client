import{g as m,u as h,b as g,a as i,F as p,c as u,d as v,j as t,e as f,l as b,s as a}from"./index-f57bf967.js";import{T as x,S as C,a as w,B as n,s as r}from"./DestinationCard-93c9b92e.js";const y=m`
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
`,R=()=>{const s=h(),l=g();if(!(l!=null&&l.id))return s(-1),i(p,{});const{data:{place:e}={},loading:c}=u(y,{variables:{id:l.id},notifyOnNetworkStatusChange:!0});return c?i(v,{text:"결과를 불러오고 있어요.."}):t(P,{children:[t(z,{children:[i("svg",{width:"12",height:"22",viewBox:"0 0 12 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:()=>{s(-1)},children:i("path",{d:"M9.62212 21.5646L0.304164 11.8127C0.193565 11.6966 0.11504 11.5708 0.0685884 11.4354C0.0221368 11.2999 -0.000720045 11.1548 1.72812e-05 11C1.72812e-05 10.8452 0.0228742 10.7001 0.0685884 10.5646C0.114303 10.4292 0.192828 10.3034 0.304164 10.1873L9.62212 0.406332C9.88019 0.135444 10.2028 0 10.5899 0C10.977 0 11.3088 0.145119 11.5853 0.435356C11.8618 0.725594 12 1.0642 12 1.45119C12 1.83817 11.8618 2.17678 11.5853 2.46702L3.45623 11L11.5853 19.533C11.8433 19.8039 11.9724 20.1378 11.9724 20.5349C11.9724 20.9319 11.8341 21.2752 11.5576 21.5646C11.2811 21.8549 10.9585 22 10.5899 22C10.2212 22 9.89862 21.8549 9.62212 21.5646Z",fill:"#61646B"})}),i("h1",{children:e==null?void 0:e.name})]}),t(A,{children:[i(I,{children:e==null?void 0:e.images.slice(0,3).map(d=>i(N,{src:d},d))}),t(B,{children:[t(L,{children:["나와의 거리 ",f(e==null?void 0:e.distance)]}),i(j,{children:e==null?void 0:e.address.replace("제주특별자치도","").trim()}),t(x,{style:{padding:"1rem 0"},children:[t("button",{onClick:()=>b({latitude:e.latitude,longitude:e.longitude}),children:[i(C,{}),"길안내"]}),t("a",{href:`tel:${e.tel}`,children:[i(w,{}),"전화하기"]})]})]})]}),t(k,{children:[t(S,{children:[e.parkingAvailable?i(n,{children:i("img",{src:r.parkingAvailable})}):null,e.wheelChairRentable?i(n,{children:i("img",{src:r.wheelChairRentable})}):null,e.toiletAvailable?i(n,{children:i("img",{src:r.toiletAvailable})}):null,e.pathExists?i(n,{children:i("img",{src:r.pathExists})}):null,e.elevatorAvailable?i(n,{children:i("img",{src:r.elevatorAvailable})}):null]}),t(D,{children:[e.pathDescription&&t(o,{children:[i("h1",{className:"title-medium main-text",children:"경로 설명"}),i("p",{children:e.pathDescription})]}),e.etc&&t(o,{children:[i("h1",{className:"title-medium main-text",children:"참고"}),i("p",{children:e.etc})]})]})]})]})},A=a.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`,k=a.div``,D=a.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  > div {
    p {
      font-size: 1.3rem;
      line-height: 2.1rem;
    }
  }
`,S=a.div`
  display: flex;
  column-gap: 1.6rem;
  padding: 2rem 0;
  justify-content: space-around;
`,B=a.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid #efeff0;
`,o=a.div``,L=a.p`
  font-size: 2.5rem;
  line-height: 4rem;
  color: #4db495;
`,j=a.p`
  font-size: 1.7rem;
  line-height: 3rem;
`,I=a.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  border-radius: 1.2rem;
  gap: 0.25rem;
  overflow: hidden;
`,N=a.img`
  object-fit: cover;

  aspect-ratio: 4/3;
  &:first-child {
    grid-column: 1 / span 2;
    grid-row: 1 / spoan 2;
  }
`,z=a.div`
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
`,P=a.section`
  padding: 4rem 2rem;
  padding-top: 6rem;
`;export{R as default};

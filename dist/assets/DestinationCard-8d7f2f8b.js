import{i as x,r as t,s as o,m as v,f as b,u as E,j as d,a as i,e as B,l as y}from"./index-f65e6b71.js";function C(e,a,l){var r;if(typeof e=="string"){let n=document;a&&(x(!!a.current),n=a.current),l?((r=l[e])!==null&&r!==void 0||(l[e]=n.querySelectorAll(e)),e=l[e]):e=n.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const H={any:0,all:1};function I(e,a,{root:l,margin:r,amount:n="any"}={}){const g=C(e),c=new WeakMap,h=f=>{f.forEach(s=>{const m=c.get(s.target);if(s.isIntersecting!==!!m)if(s.isIntersecting){const p=a(s);typeof p=="function"?c.set(s.target,p):A.unobserve(s.target)}else m&&(m(s),c.delete(s.target))})},A=new IntersectionObserver(h,{root:l,rootMargin:r,threshold:typeof n=="number"?n:H[n]});return g.forEach(f=>A.observe(f)),()=>A.disconnect()}function S(e,{root:a,margin:l,amount:r,once:n=!1}={}){const[g,c]=t.useState(!1);return t.useEffect(()=>{if(!e.current||n&&g)return;const h=()=>(c(!0),n?void 0:()=>c(!1)),A={root:a&&a.current||void 0,margin:l,amount:r==="some"?"any":r};return I(e.current,h,A)},[a,e,l,n]),g}const N=e=>t.createElement("svg",{width:12,height:13,viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},t.createElement("rect",{y:.530457,width:12,height:12,fill:"url(#pattern2)"}),t.createElement("defs",null,t.createElement("pattern",{id:"pattern2",patternContentUnits:"objectBoundingBox",width:1,height:1},t.createElement("use",{xlinkHref:"#image2_228_18900",transform:"scale(0.0104167)"})),t.createElement("image",{id:"image2_228_18900",width:96,height:96,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFQklEQVR4nO2dTYiVVRjHf1POjJOShlmmuSnFRVFGqyiKyKYyJzcFIRWSodCXuaql0SZq1JocKAqjdhnYQgpCyLKIiMr5qCCtMa1W44zaIrJynjjwCHJr7r1z3/PxvO89f/hvhpk7//M/9z1fz3OeFzIyMjIyMjIyMjIyMmxhIdALPAEMAvuAEeAnYBI4rZzUn43o7+zUv+nVz8hoEj1AH7ADGAamAClI9xlD+plrgNm5N/6L64GXgeMeDG/Ek8DbwCqgo507oxvYBPwYwfTpeBjYqFraapjZAvya0PhaOi2bVVul4cbgMQOGyzR0E/lqKoilwHsGDJYmuQe4nIrgHmDCgKnSwmR9LyXGLOB5T0tJScQpXZ11UTJcBHxqwEDxxE+A+ZQEl+nGRyrGb8swLywDjhgwSwLxiLbRJBZX3HxRHtNVnSnMAw4aMEcicVTnORPoqtiEK03yY6ATA3jJgBmSiC9aOFoo8zpfCtK1fW0q85dqIETanMeBJSk6oExnOxKYu2Obf6eBRosxRjtF7TF+pCyJeChWuHOLgcaKUT4e2vxuY5EsMbhLDnpyuslAI8U4HwllfkfiALp45C/AC8ADgeaCINkWtxgwTgrwD10u9mmwCO2EEP/rphAd8IYBE2WG/Ecz5R4C5tS05zx9EkL839d8m++WVycMGCpN8jvgaeDSOm26LXA82WuKS58BU6UB3fy0FVjeZJveLNPGbIcBg+V/ONlimuFs/ZaG1NbvswOGDZgtyj+BvcB9Bdbc90fQ+Y0v8xcaOHI+A+wHHtboW1HsjaR5gQet3JF4Mt0KXIE/uC/UX5H0u6GxMJ6MbPpvmgwVZC2tFzditeUxH4IHE22SQuGLiB0w4EPwvkDi/gbeB9YBFxAHyyM/zR/6ED0aaJO0iPh4NnIHuNVjYfzs6ZjWJequIC0ORe4AF7gqjKL3tnYBc0mPGyKb7zjuQ/hpD0JO6QHVStJhMNGm0UQHnMuv9GLcHOKhU7+NpeyAULdbTulTcS3hsTaB+d6GIB+TcOqnYneiDhizuAytx5P6VFyDP1yoG70UHTBseSMmDXhAY7ZFc202JNLvbSO2M2EDROeg7Q2iW/WwP6H2gbIdXkkdbmtB+xI9Fk6l+VEfHdBrwHzRDeFMh6NnEmt2cefCuNhAQEaUbk6wuoAIFpCxFJI8MAPN1yXW+jUesd2A+aK8qknN/VW6vrTGgPGidHfSGuF8jayl1HlXVROzTjQRwLndQLqM9yJQrxswX5QPNtD6VmJ9rxIANxswXpSf1dHpno7fE+u7MUQHdGiNNTHCq6fRuS6xrh9CFgPcaMB4abDN/yCxLnf2FDSwcdSA+aInp7WT8SWabVHZK0oOTxkwX5Tra7RtTqzHSyJWI/QYuqr0eY22LxOP/dHqj6bMF5UarkyUdBV049UM9hgwXzRe4fBcQg3vkKhYx4SRyXhuwtv741otLFlNUAtH1bsS/d8pC5V2txnoAElEl26ZHJ1aV1PajB9ZKVl2NvWjnYr2jVgs5Lq4TcrYjGlxWpNYVvFOGAOuxDgWVXQ4Gk1VG64VzNe6mlKhCXceJcMsvWKaMjFKPJWvN7PaaTWgH+PtSOKZTvPdVARu7HzXgKkyg7OdZMcLIXEr8L0Bg2UaHtaSnJVGt1YXPGbA8LM8qsGUtnqfWJcWuIt9dbQ2iLKhjO+ICfUqw/EIpudXGTbIwFutJ6wHPS1hz2jtnn6NWrXVMFMUC7TkixufX9ErP0P6xruJc15nO6E/G9LfGdDLEat8pohnZGRkZGRkZGRkZGTgAf8Cn91dlM2cg/wAAAAASUVORK5CYII="}))),k=e=>t.createElement("svg",{width:12,height:13,viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},t.createElement("rect",{y:.22583,width:12,height:12,fill:"url(#pattern1)"}),t.createElement("defs",null,t.createElement("pattern",{id:"pattern1",patternContentUnits:"objectBoundingBox",width:1,height:1},t.createElement("use",{xlinkHref:"#image1_228_18893",transform:"scale(0.0104167)"})),t.createElement("image",{id:"image1_228_18893",width:96,height:96,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADqElEQVR4nO2dSahNcRzHPxleKWRa8WRImWcWSqSIBZkSKRtCVm8hCxsLyVqUKQsJmTJkXpEkpQyJrNjIPL5XCs+7Ovxv8Xqc3zn3/N55957vp/7Ld++5388Z/uf3Hx4IIYQQQgghhBBCCPF/hgBHgVdAKWVrAs4CQxV2MsYAnysIvnVrBIZJgp0LGYZfCu2yBNhpdBDwDegsCTaaHQSUgD4SYOOLk4B6CbDxyUnAcAmw8dJJwGQJsPHIScBcCbBxw0nAGgmwcdpJwBYJsLHTScABCbCx0UnAfQmwsdRJwA+gpyTYinElpzZbAuLpCnx1ErBNAmw8cBJwTwJsHHIS0AIMkIR4Njg+B1ZKQDzjHQVslIB4OjtWRedLQH4licehlyUMrM84/NfASCVvZ1CG4b8Bxir85NzNIPwPwCSFn47NGYQ/WeGnZ2gF4X9U+NlwO2X4U3TmZ8PaFOFPVfjZ0T3BbDmF78RePXDzZUSoZP7v7D+X8zHWPBcNV8GcvA+ylplpHHjXLGhHrhkkRDUk4cQMY92nr9cBiN+rXeIkHFNQfkQl5e8GCcsdj6Hw7Da+lNUXPikn+oZ7fZyEy0AnSfBhlbE8sVUC/LhqENACLJEEH6JJVu+Nq+bHSIIPK423oqeaFefHUaOER0A/x+Mo9JiBdXHffaBX3gdcqy9oTUYJN7RYw4fFYSWMRcId59tRHbAQ2BSeU4WZlb3JKKAUpip6BDMKeNJGdzhan7A9rNTpQQ2zL4GEZxl3Ucca39Kbw/Nof1hCuxqYF6bSRCOAg4HeQBeqkGhQ5kQCCU1hcWCljDOGn6Q1hxfOqtt0qg64lOCHtoQ1ZJ0qWNPwNuPw/2yN1bj9WreEEqJ2Beif8HsmAO8cwy+3M1QhdQlvR6VQ3lhh/PyJ7RR++SqgWp8Je1P84OMxw5uTjLWoLFtV05DgPeHPq6GhjdkW7Xnm14yAiEUpNwaMuoyzfn3C767ihxzCrwkBhH522o2hzuUYfs0IKBfwDucYZOEFlFmWw4NUAloxMPT/8w63ULegtlgAPO8AIRdWAGGH3V3GyV8S4DzAc7EDBF64K6A104DzHSD4wgooMz2ISPomLQEZE+1BvSfB+LMEONEj7MZ7SwI6xsYiDcBNw2LCSlq0sbmIoT5cGScdakZH4r5c/E00vDkaWAccDLu/pN2S81P471KiQrqEaSsLw21rB3AKuA48BF6EK6dcMm8Mva/ob4QQQgghhBBCCCGE4F/8BL2yOYZ35iYjAAAAAElFTkSuQmCC"}))),G="/assets/elevatorAvailable-c849d9b8.svg",j="/assets/parkingAvailable-2f00f6b5.svg",M="/assets/pathExists-5d1ca2b8.svg",O="/assets/toiletAvailable-17b6c510.svg",Q="/assets/wheelChairRentable-10066545.svg",u={elevatorAvailable:G,parkingAvailable:j,pathExists:M,toiletAvailable:O,wheelChairRentable:Q},F=({node:e,maxLength:a,idx:l,fetchMore:r})=>{const n=t.useRef(null),g=b(f=>f.setIsToastOpen),c=S(n,{once:!0}),h=t.useMemo(()=>a===l+1,[l,a]);t.useEffect(()=>{h&&c&&r()},[h,c]);const A=E();return d(V,{ref:n,onClick:()=>{A(e.id)},children:[d(J,{className:"scrollbar-hide",children:[i(L,{children:i("img",{src:e.thumbnails[0]})}),d(D,{children:[d("div",{style:{display:"flex",flexDirection:"column"},children:[i("h4",{className:"title-medium text-bold",children:e.name}),d("span",{className:"title-small main-text",children:["나와의 거리 ",B(e.distance)]}),i(T,{className:"body-small2 text-subdark",onClick:()=>{window.navigator.clipboard.writeText(e.address).then(()=>{g(!0)})},children:e.address.split(" ").filter((f,s)=>s!==0).join(" ")})]}),d(R,{children:[d("button",{onClick:()=>y({latitude:e.latitude,longitude:e.longitude}),children:[i(N,{}),"길안내"]}),d("a",{href:`tel:${e.tel}`,children:[i(k,{}),"전화하기"]})]})]})]}),d(U,{className:"scrollbar-hide",children:[e.parkingAvailable?i(w,{children:i("img",{src:u.parkingAvailable})}):null,e.wheelChairRentable?i(w,{children:i("img",{src:u.wheelChairRentable})}):null,e.toiletAvailable?i(w,{children:i("img",{src:u.toiletAvailable})}):null,e.pathExists?i(w,{children:i("img",{src:u.pathExists})}):null,e.elevatorAvailable?i(w,{children:i("img",{src:u.elevatorAvailable})}):null]})]})},V=o(v.div)`
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
`;o.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;const D=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 1rem;
`,L=o.div`
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
`,R=o.div`
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
`,J=o.div`
  display: flex;
  column-gap: 1.5rem;
`,P=o.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* justify-content: space-around; */
`,U=o(P)`
  /* justify-content: space-around; */
`,T=o.span`
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: inherit;
`,w=o.button`
  width: 4.6rem;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeff0;
  border-radius: 999rem;
  margin: 0 auto;
`;export{w as B,F as D,N as S,R as T,k as a,u as s};

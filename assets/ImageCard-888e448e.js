import{r as i,j as s}from"./index-1d573d0c.js";const p=({src:r,alt:n="Image",width:c="200px",height:o="200px",objectFit:d="contain",zoomOnHover:m=!1,info:t="",staticInfo:l=!1})=>{const[x,a]=i.useState(l);return i.useEffect(()=>{const e=()=>{window.innerWidth<=768?a(!0):a(!1)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),s.jsxs("div",{className:`card ${m?"zoom":""}`,style:{width:c,height:o},children:[s.jsx("img",{src:r,alt:n,className:"card-image",style:{objectFit:d}}),t&&s.jsx("div",{className:`info-box ${x?"static":""}`,children:t})]})};export{p as I};

import{j as e,r as o}from"./index-5b52d62d.js";import{I as d}from"./ImageCard-1f32c282.js";import{I as s}from"./InfoCard-551244fd.js";const k=()=>e.jsxs("div",{className:"Sokande-body",children:[e.jsxs("div",{className:"sokande-split",children:[e.jsx(u,{}),e.jsx(f,{})]}),e.jsx("div",{className:"wide-img",children:e.jsx(d,{src:"img/red.jpeg",alt:"red image",width:"90vw",height:"500px",objectFit:"cover",zoomOnHover:!0})})]}),u=()=>e.jsxs("div",{className:"info-text",children:[e.jsxs("h2",{className:"info-text-title",children:["Information för framtida"," ",e.jsx("span",{className:"highlight-sokande",children:"I:are"})]}),e.jsx("p",{className:"info-text-description",children:"Här hittar du all information som kan vara intressant för dig som ansöker till Industriell Ekonomi, allt från antagningsprocessen till hur det är att plugga på I."})]}),f=()=>{const i=()=>window.innerWidth<=768?window.innerWidth*.9:window.innerWidth*.45,r=()=>window.innerWidth<=768?140:196,[t,l]=o.useState({width:i(),imageHeight:i(),infoCardHeight:r()});return o.useEffect(()=>{const a=((h,c)=>{let n;return(...m)=>{const g=()=>{clearTimeout(n),h(...m)};clearTimeout(n),n=setTimeout(g,c)}})(()=>{l({width:i(),imageHeight:i(),infoCardHeight:r()})},100);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e.jsxs("div",{className:"links",children:[e.jsx(d,{src:"img/mottagning.jpeg",alt:"red image",width:`${t.width}px`,height:`${t.imageHeight}px`,objectFit:"cover",zoomOnHover:!1,info:"Mottagningen 2023"}),e.jsx(s,{title:"Officiell Programsida",content:"Här hittar du all information om programmet från Chalmers officiella sida.",width:`${t.width}px`,height:`${t.infoCardHeight}px`,url:"https://www.chalmers.se/utbildning/hitta-program/industriell-ekonomi-civilingenjor/"}),e.jsx(s,{title:"Antagnings- statestik",content:"Se antagningsstatistik för Industriell Ekonomi på Chalmers",width:`${t.width}px`,height:`${t.infoCardHeight}px`,url:"https://www.uhr.se/studier-och-antagning/antagningsstatistik/detaljsida/?utbildningId=102BF240EB3C54E1240FBD55BA584795&astasearchperiod=HT24&astasearchfor=Industriell%20Ekonomi%20Chalmers&astasearchcategory="}),e.jsx(s,{title:"Alumner",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus aliquam urna, eu lobortis lorem.",width:`${t.width}px`,height:`${t.infoCardHeight}px`,url:"https://www.youtube.com/watch?v=xvFZjo5PgG0"})]})};export{k as default};

import{g as f,j as n,b as m,L as u}from"./index-ab7ddb25.js";var d={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var i={}.hasOwnProperty;function e(){for(var r="",s=0;s<arguments.length;s++){var c=arguments[s];c&&(r=o(r,t(c)))}return r}function t(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return e.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var c in r)i.call(r,c)&&r[c]&&(s=o(s,c));return s}function o(r,s){return s?r?r+" "+s:r+s:r}a.exports?(e.default=e,a.exports=e):window.classNames=e})()})(d);var p=d.exports;const l=f(p),j=({src:a,alt:i="Image",objectFit:e="contain",info:t="",className:o=""})=>n.jsxs("div",{className:l("card",o),children:[n.jsx("img",{src:a,alt:i,className:"card-image",style:{objectFit:e}}),t&&n.jsx("div",{className:"info-box",children:t})]});const h=m.memo(({title:a,content:i,url:e,isInternal:t=!1,className:o=""})=>{const r=n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"info-card info-card-background"}),n.jsxs("div",{className:"info-card info-card-foreground",children:[n.jsx("div",{className:"info-card-title",children:a}),n.jsx("div",{className:"info-card-content",children:i})]})]});return n.jsx("div",{className:l("info-card-container",o),children:t?n.jsx(u,{to:e,className:"info-card-link",children:r}):n.jsx("a",{href:e,className:"info-card-link",target:"_blank",rel:"noopener noreferrer",children:r})})});export{j as I,h as a};

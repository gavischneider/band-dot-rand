(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,s){},40:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var a=s(2),r=s(1),c=s.n(r),n=s(23),l=s.n(n),i=(s(39),s(40),s(11)),o=s.n(i),d=s(33),m=s(24),j=s(31),b=s(25),h=s.n(b),u=function(e){return console.log("PROPS"),console.log(e),Object(a.jsx)("div",{className:"mx-auto",children:Object(a.jsx)("img",{className:"rounded-full h-64 w-64 shadow-lg",src:e.photo,alt:"artist"})})},x=s.p+"static/media/spotifybutton.de4dcd15.png",f=function(e){return Object(r.useEffect)((function(){var t=e.info.name,s=document.createElement("a");s.setAttribute("href","https://twitter.com/share?ref_src=twsrc%5Etfw"),s.setAttribute("class","twitter-share-button"),s.setAttribute("data-size","large"),s.setAttribute("data-text","I discovered ".concat(t," on band.rand()!")),s.setAttribute("data-url","https://www.banddotrand.software"),s.setAttribute("data-via","gschnei"),s.setAttribute("data-hashtags","bandDotRand"),s.setAttribute("data-lang","en"),s.setAttribute("data-show-count","false"),document.getElementsByClassName("twitter-embed")[0].appendChild(s);var a=document.createElement("script");a.setAttribute("src","https://platform.twitter.com/widgets.js"),document.getElementsByClassName("twitter-embed")[0].appendChild(a)}),[e.info.name]),Object(a.jsxs)("div",{className:"lg:flex justify-center py-12 px-12 container mx-auto rounded mt-5 mb-8 shadow-lg bg-gray-800",children:[Object(a.jsx)("div",{className:"text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-5",children:Object(a.jsx)(u,{photo:e.info.images[1].url})}),Object(a.jsx)("div",{className:"text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-2",children:Object(a.jsxs)("div",{className:"m-auto",children:[Object(a.jsx)("h1",{className:"text-4xl mb-5 text-white",children:e.info.name}),e.info.external_urls.spotify?Object(a.jsx)("a",{href:e.info.external_urls.spotify,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{className:"w-40 shadow-lg transform transition duration-300 hover:scale-110 mb-6",alt:"spotify button",src:x})}):Object(a.jsx)("h3",{children:'""'}),Object(a.jsx)("div",{className:"twitterContainer",children:Object(a.jsx)("div",{className:"twitter-embed"})})]})})]})},g=function(e){return Object(a.jsxs)("div",{className:"max-w-xs rounded shadow-lg transform transition duration-300 hover:scale-110 bg-gray-800 mx-auto",children:[Object(a.jsx)("div",{className:"object-none object-fill",children:Object(a.jsx)("a",{href:e.album.external_urls.spotify,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{alt:"Album Cover",src:e.album.images[1].url})})}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("div",{className:"px-6 py-4 mx-auto ",children:Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("div",{className:"font-bold text-purple-600 text-lg mb-2",children:e.album.name}),Object(a.jsx)("div",{className:"font-bold text-white text-md mb-2",children:e.album.release_date.replaceAll("-","/")})]})})})]})},p=function(e){console.log("PROPS"),console.log(e);var t=e.albums;return Object(a.jsx)("div",{className:"container mx-auto",children:Object(a.jsx)("div",{className:"object-center grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto",children:t.map((function(e){return Object(a.jsx)(g,{album:e},e.id)}))})})},O=s.p+"static/media/logo2.4f5b0155.png",w=function(){return Object(a.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-purple-600 pl-6 pr-6 pt-3 pb-3 shadow-lg inset-x-0 top-0 object-top sticky z-10",children:[Object(a.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:Object(a.jsx)("img",{src:O,alt:"logo",className:"w-24 h-18"})}),Object(a.jsx)("div",{className:"flex",children:Object(a.jsx)("div",{className:"my-auto pr-1",children:Object(a.jsx)("button",{onClick:function(){window.location.reload()},className:"bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:from-teal-400 hover:to-blue-500  h-10 px-5 m-2 transition-colors duration-120 rounded-lg focus:shadow-outline shadow-lg transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110",children:"Next!"})})})]})},v=s(5),N=s(6),y=function(){var e=(new Date).getFullYear();return Object(a.jsx)("div",{className:"pt-20",children:Object(a.jsxs)("div",{className:"flex items-center justify-center flex-wrap bg-purple-600 p-3 shadow-lg inset-x-0 top-0 object-top sticky z-10",children:["\xa9 ".concat(e),Object(a.jsx)("a",{href:"https://gavischneider.github.io/Personal-Site/",target:"_blank",rel:"noreferrer",className:"pl-1",children:"Gavi Schneider"}),Object(a.jsxs)("div",{className:"social-icons",children:[Object(a.jsx)("a",{href:"https://www.linkedin.com/in/gavi-schneider-27a87837/",target:"_blank",rel:"noreferrer",className:"linkedin social pl-2",children:Object(a.jsx)(v.a,{icon:N.d,size:"2x"})}),Object(a.jsx)("a",{href:"https://twitter.com/gschnei",target:"_blank",rel:"noreferrer",className:"twitter social pl-2",children:Object(a.jsx)(v.a,{icon:N.e,size:"2x"})}),Object(a.jsx)("a",{href:"https://www.instagram.com/gavischneider/",target:"_blank",rel:"noreferrer",className:"instagram social pl-2",children:Object(a.jsx)(v.a,{icon:N.c,size:"2x"})}),Object(a.jsx)("a",{href:"https://github.com/gavischneider",target:"_blank",rel:"noreferrer",className:"github social pl-2",children:Object(a.jsx)(v.a,{icon:N.b,size:"2x"})}),Object(a.jsx)("a",{href:"https://dev.to/gschnei",target:"_blank",rel:"noreferrer",className:"dev social pl-2",children:Object(a.jsx)(v.a,{icon:N.a,size:"2x"})})]})]})})},A=function(e){return console.log("------RELATED ARTISTS PROPS------"),console.log(e),Object(a.jsx)("div",{className:"max-w-xs rounded shadow-lg p-4 transform transition duration-300 hover:scale-110 mb-4 mt-4 bg-gray-800",children:Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("div",{className:"",children:Object(a.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"justify-center",children:Object(a.jsx)("img",{className:"rounded-full h-32 w-32 mx-auto",src:e.images[0].url,alt:"artist"})})}),Object(a.jsx)("div",{className:"font-bold text-purple-600 text-lg mb-2 mt-3",children:e.name})]})})},S=s(32),k=function(e){console.log("ARTISTS RELATED ARTISTS PROPS"),console.log(e);var t=e.relatedArtists;return Object(a.jsxs)("div",{className:"container mx-auto pt-10",children:[Object(a.jsx)("h1",{className:"mb-10 mt-8 text-2xl text-white",children:"Related Artists"}),Object(a.jsx)(S.a,{breakPoints:[{width:1,itemsToShow:1},{width:500,itemsToShow:2},{width:600,itemsToShow:3},{width:750,itemsToShow:4},{width:1100,itemsToShow:5}],className:"p-5",children:t.map((function(e){return Object(a.jsx)(A,{name:e.name,images:e.images,url:e.external_urls.spotify},e.id)}))})]})},_=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(r.useEffect)((function(){!function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get("http://localhost:3001/random").then((function(e){c([Object(d.a)({},e.data)]),console.log("RESPONSE.DATA"),console.log(e.data)})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),console.log("initialState: "),console.log(s),s[0]?Object(a.jsxs)("div",{className:"bg-gray-900",children:[Object(a.jsx)(w,{}),Object(a.jsx)(f,{info:s[0]}),Object(a.jsx)(p,{albums:s[0].albums}),Object(a.jsx)(k,{relatedArtists:s[0].relatedArtists}),Object(a.jsx)(y,{})]}):Object(a.jsx)("span",{children:"loading..."})};var E=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(_,{})})};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.d96e64bf.chunk.js.map
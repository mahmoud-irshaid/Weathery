(this.webpackJsonpweathery=this.webpackJsonpweathery||[]).push([[0],{44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(14),r=n.n(i),s=n(3),d=n.p+"static/media/gps.842bf24c.svg",o=n(0);var m=function(e){var t=e.findCity,n=e.citySearch,a=e.getLocation,c=e.forwardedRef;return Object(o.jsx)("form",{onSubmit:t,children:Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",onChange:n,placeholder:"country name",ref:c}),Object(o.jsx)("input",{type:"submit"}),Object(o.jsx)("button",{onClick:a,children:Object(o.jsx)("img",{src:d,className:"subSvg"})})]})})},h=n(15),u=n(16),l=n(20),j=n(19),p=n.p+"static/media/01d.c33ef664.svg",b=n.p+"static/media/01n.6cf4adcd.svg",f=n.p+"static/media/02d.2164d3c4.svg",O=n.p+"static/media/02n.e2327d50.svg",g=n.p+"static/media/03d.6203670e.svg",v=n.p+"static/media/03n.6203670e.svg",x=n.p+"static/media/04d.24f9a474.svg",S=n.p+"static/media/04n.24f9a474.svg",y=n.p+"static/media/09d.130d6250.svg",_=n.p+"static/media/09n.130d6250.svg",k=n.p+"static/media/10d.8c33eccc.svg",N=n.p+"static/media/10n.8c33eccc.svg",w=n.p+"static/media/11d.19ff3c30.svg",E=n.p+"static/media/11n.19ff3c30.svg",W=n.p+"static/media/13d.dce3f5e7.svg",M=n.p+"static/media/13n.dce3f5e7.svg",I=n.p+"static/media/50d.6180d07b.svg",C=n.p+"static/media/50n.6180d07b.svg";var L=function(e){var t=e.details,n={S01d:p,S01n:b,S02d:f,S02n:O,S03d:g,S03n:v,S04d:x,S04n:S,S09d:y,S09n:_,S10d:k,S10n:N,S11d:w,S11n:E,S13d:W,S13n:M,S50d:I,S50n:C},a="";for(var c in n)n[c].slice(14,17)===t[3].weather[0].icon&&(a=n[c]);return Object(o.jsxs)("div",{className:"dayz",children:[Object(o.jsxs)("p",{children:[t[3].main.temp,"\xb0 / ",t[0].main.temp,"\xb0"]}),Object(o.jsx)("img",{src:a}),Object(o.jsx)("p",{children:t[0].dt_txt.slice(5,10)})]})};var R=function(e){var t=e.today,n={S01d:p,S01n:b,S02d:f,S02n:O,S03d:g,S03n:v,S04d:x,S04n:S,S09d:y,S09n:_,S10d:k,S10n:N,S11d:w,S11n:E,S13d:W,S13n:M,S50d:I,S50n:C};function a(e){var t="";for(var a in n)n[a].slice(14,17)===e.weather[0].icon&&(t=n[a]);return t}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"today",children:t.map((function(e){return Object(o.jsxs)("div",{className:"dayCard",children:[Object(o.jsx)("img",{src:a(e)}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:[e.main.temp,"\xb0"]}),Object(o.jsx)("h4",{children:e.weather[0].main}),Object(o.jsx)("p",{children:e.dt_txt.slice(10,16)})]}),Object(o.jsxs)("div",{className:"subInfo",children:[Object(o.jsxs)("p",{children:[e.main.temp_max,"\xb0 / ",e.main.temp_min,"\xb0"]}),Object(o.jsxs)("p",{children:["Humidity: ",e.main.humidity,"%"]}),Object(o.jsxs)("p",{children:["wind: ",e.wind.speed,"km/h"]})]})]})]},e.dt)}))})})},D=n.p+"static/media/celsius.60b97822.svg",A=n.p+"static/media/fahrenheit.1a81f20a.svg",P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={fehr:!0},a.header=c.a.createRef(),a}return Object(u.a)(n,[{key:"componentWillMount",value:function(){this.props.daysWeather.map((function(e){return e.main.temp=Math.floor(9*(e.main.temp-273.15)/5+32),e.main.temp_max=Math.floor(9*(e.main.temp_max-273.15)/5+32),e.main.temp_min=Math.floor(9*(e.main.temp_min-273.15)/5+32),e}))}},{key:"componentDidMount",value:function(){this.header.current.scrollIntoView({behavior:"smooth",block:"start"})}},{key:"render",value:function(){for(var e=this,t=[],n=[],a=this.props.daysWeather[0].dt_txt.slice(8,11),c=0;c<this.props.daysWeather.length;c++)this.props.daysWeather[c].dt_txt.slice(8,11)===a||(t.push(n),n=[],a=this.props.daysWeather[c].dt_txt.slice(8,11)),n.push(this.props.daysWeather[c]);return t.push(n),t.map((function(t){return t.map((function(t){return e.state.fehr?(t.main.temp=Math.round(5*(t.main.temp-32)/9),t.main.temp_max=Math.round(5*(t.main.temp_max-32)/9),t.main.temp_min=Math.round(5*(t.main.temp_min-32)/9)):(t.main.temp=Math.round(9*t.main.temp/5+32),t.main.temp_max=Math.round(9*t.main.temp_max/5+32),t.main.temp_min=Math.round(9*t.main.temp_min/5+32)),t}))})),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"states",children:[Object(o.jsxs)("div",{className:"header",ref:this.header,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:this.props.country.name}),Object(o.jsx)("h3",{children:t[0][0].dt_txt.slice(5,10)})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){return e.setState({fehr:!e.state.fehr})},children:Object(o.jsx)("img",{src:this.state.fehr?D:A,className:"subSvg"})})})]}),Object(o.jsx)(R,{today:t[0],country:this.props.country}),t.slice(1).map((function(e){return Object(o.jsx)(L,{details:e},e[0].dt)}))]})})}}]),n}(c.a.PureComponent),T=n(17),U=n.n(T),q=function(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(null),d=Object(s.a)(r,2),o=d[0],m=d[1],h=Object(a.useState)(null),u=Object(s.a)(h,2),l=u[0],j=u[1];return Object(a.useEffect)((function(){j(!0),e||(j(!0),m(null),i(null));try{U.a.get(e).then((function(e){j(!1),m(null),i(e)})).catch((function(e){j(!1),m(e)}))}catch(t){j(!1),m(t)}}),[e]),{data:c,err:o,isLoading:l}},B=n(18),F=n(5);var G=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(s.a)(i,2),d=r[0],h=r[1],u=Object(a.useState)(""),l=Object(s.a)(u,2),j=l[0],p=l[1],b=Object(a.useState)([]),f=Object(s.a)(b,2),O=f[0],g=f[1],v=Object(a.useRef)();Object(a.useEffect)((function(){document.documentElement.className="theme-light",k()}),[]);var x=q("https://api.openweathermap.org/data/2.5/forecast?q=".concat(d,"&appid=").concat("3620601107f4d9544bfa64bd1c29b118")),S=x.data,y=x.err,_=x.isLoading;function k(){navigator.geolocation?navigator.geolocation.getCurrentPosition(N,w):p("Geolocation is not supported by this browser.")}function N(e){var t=F.filter((function(t){if(t.lat.slice(0,4)===e.coords.latitude.toString().slice(0,4)&&t.lng.slice(0,4)===e.coords.longitude.toString().slice(0,4))return t}));h(t[0].name)}function w(e){switch(e.code){case e.PERMISSION_DENIED:p("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:p("Location information is unavailable.");break;case e.TIMEOUT:p("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:p("An unknown error occurred.")}}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"Weathery"}),Object(o.jsx)("a",{className:"copyright",target:"_blank",href:"https://github.com/mahmoud-irshaid",children:Object(o.jsx)("img",{src:"github.png"})})]}),Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("h2",{children:"search by country"}),Object(o.jsx)(m,{findCity:function(e){e.preventDefault(),h(n),c(""),e.target.reset()},citySearch:function(e){g(function(e){var t;try{t=F.filter((function(t){var n=new RegExp("^".concat(e),"gi");return t.name.match(n)||t.country.match(n)}))}catch(n){alert("Enter country name correctly or not found")}0===e.length&&(t=[]);return t}(e.target.value)||[]),c(e.target.value)},getLocation:k,forwardedRef:v}),Object(o.jsx)("div",{className:"hints",children:O.map((function(e){return Object(o.jsx)("div",{onClick:function(e){h(e.target.id),g([]),v.current.value=""},children:Object(o.jsxs)("p",{id:e.name,children:[e.country,",",e.name]})})}))}),function(e,t,n){if(!t)return!e&&n?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"continuous-4"}),Object(o.jsx)("h5",{children:"Loading . . ."})]}):e?Object(o.jsx)(B.ErrorBoundary,{fallback:Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Error Detected"})}),children:Object(o.jsx)(P,{daysWeather:e.data.list,country:e.data.city})}):null}(S,y,_),j,function(){var e=(new Date).getHours();document.documentElement.className=e>=20||e<=8?"theme-dark":"theme-light"}()]}),Object(o.jsx)("a",{className:"copyright",target:"_blank",href:"https://github.com/mahmoud-irshaid",children:"\xa9 2021 Copyright by Mahmoud Irshaid"})]})};r.a.render(Object(o.jsx)(G,{}),document.getElementById("root")),"serviceWorker"in navigator?window.addEventListener("load",(function(){navigator.serviceWorker.register("serviceWorker.js").then((function(e){console.log("Worker registration successful",e.scope)}),(function(e){console.log("Worker registration failed",e)})).catch((function(e){console.log(e)}))})):console.log("Service Worker is not supported by browser.")}},[[44,1,2]]]);
//# sourceMappingURL=main.07811b1d.chunk.js.map
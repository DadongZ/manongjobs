(this.webpackJsonpmanongjobs=this.webpackJsonpmanongjobs||[]).push([[0],{158:function(e,a,t){},159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),o=t.n(c),l=(t(57),t(19)),s=t(7),m=t(11),i=t(163),u=t(12),p=t.n(u),d="make-request",g="get-data",b="error",E="update_has_next_page",h="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function f(e,a){switch(a.type){case d:return{loading:!0,jobs:[]};case g:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case b:return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case E:return Object(s.a)(Object(s.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var y=t(166),j=t(161),v=t(162),k=t(165),w=t(30),N=t.n(w);function O(e){var a=e.job,t=Object(n.useState)(!1),c=Object(m.a)(t,2),o=c[0],l=c[1];return r.a.createElement(y.a,{className:"mb3"},r.a.createElement(y.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(y.a.Title,null,a.title," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(y.a.Subtitle,{className:"text-muted mb2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(j.a,{variant:"secondary",className:"mr2"},a.type),r.a.createElement(j.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(N.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",alt:a.company,src:a.company_logo,width:"80",height:"80"})),r.a.createElement(y.a.Text,null,r.a.createElement(v.a,{onClick:function(){return l((function(e){return!e}))},variant:"primary"},o?"Hide Details":"View Details")),r.a.createElement(k.a,{in:o},r.a.createElement("div",{className:"mt4"},r.a.createElement(N.a,{source:a.description})))))}var x=t(167);function C(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(x.a,null,1!==a&&r.a.createElement(x.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(x.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(x.a.Ellipsis,null),a>2&&r.a.createElement(x.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(x.a.Item,{active:!0},a),n&&r.a.createElement(x.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(x.a.Next,{onClick:function(){return c(1)}}))}var P=t(164),_=t(51);function T(e){var a=e.params,t=e.onParamChange;return r.a.createElement(P.a,{className:"mb4"},r.a.createElement(P.a.Row,{className:"align-items-end"},r.a.createElement(P.a.Group,{as:_.a},r.a.createElement(P.a.Label,null,"Key words"),r.a.createElement(P.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(P.a.Group,{as:_.a},r.a.createElement(P.a.Label,null,"Location"),r.a.createElement(P.a.Control,{onChange:t,value:a.Location,name:"location",type:"text"})),r.a.createElement(P.a.Group,{as:_.a,xs:"auto",className:"ml-2"},r.a.createElement(P.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb2"}))))}t(158);var L=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(1),u=Object(m.a)(o,2),y=u[0],j=u[1],v=function(e,a){var t=Object(n.useReducer)(f,{jobs:[],loading:!0}),r=Object(m.a)(t,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var t=p.a.CancelToken.source();o({type:d}),p.a.get(h,{cancelToken:t.token,params:Object(s.a)({markdown:!0,page:a},e)}).then((function(e){o({type:g,payload:{jobs:e.data}})})).catch((function(e){p.a.isCancel(e)||o({type:b,payload:{error:e}})}));var n=p.a.CancelToken.source();return p.a.get(h,{cancelToken:n.token,params:Object(s.a)({markdown:!0,page:a+1},e)}).then((function(e){o({type:E,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){p.a.isCancel(e)||o({type:b,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,y),k=v.jobs,w=v.loading,N=v.error,x=v.hasNextPage;return r.a.createElement(i.a,{className:"my-4"},r.a.createElement("h1",{className:"mb4"},"Programmers Jobs"),r.a.createElement(T,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;j(1),c((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(l.a)({},a,t))}))}}),r.a.createElement(C,{page:y,setPage:j,hasNextPage:x}),w&&r.a.createElement("h1",null,"Loading..."),N&&r.a.createElement("h1",null,"Error. Try Refreshing."),k.map((function(e){return r.a.createElement(O,{key:e.id,job:e})})),r.a.createElement(C,{page:y,setPage:j,hasNextPage:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){e.exports=t(159)},57:function(e,a,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.42bcdae4.chunk.js.map
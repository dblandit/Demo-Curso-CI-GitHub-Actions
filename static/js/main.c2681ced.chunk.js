(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(0),c=e(1),r=e.n(c),u=e(4),i=e.n(u),s=(e(14),e(5)),a=e(6),d=e(8),h=e(7),l=function(t){return Object(o.jsx)("button",{onClick:function(){return"+"===t.sign?t.updateCount(1):t.updateCount(-1)},children:t.sign})},f=e(3),j=function(t){Object(d.a)(e,t);var n=Object(h.a)(e);function e(t){var o;return Object(s.a)(this,e),(o=n.call(this,t)).state={count:0,isLoaded:!1,error:null},o}return Object(a.a)(e,[{key:"componentWillMount",value:function(){var t=this;fetch(f.BACKEND_URL+"/count").then((function(t){return console.log(t),t})).then((function(t){return t.json()})).then((function(n){t.setState({isLoaded:!0,count:parseInt(n.value)})})).catch((function(n){t.setState({isLoaded:!0,error:n})}))}},{key:"handleCount",value:function(t){var n=this;console.log(this.state);var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({counter:this.state.count+1})};fetch(f.BACKEND_URL+"/count",e).then((function(){n.setState((function(t){return{count:t.count+1}}))})).catch(console.error)}},{key:"render",value:function(){var t=this.state,n=t.count,e=t.isLoaded,c=t.error;return c?Object(o.jsxs)("div",{children:["Error: ",c.message]}):e?Object(o.jsxs)("div",{children:["Current count: ",n,Object(o.jsx)("hr",{}),Object(o.jsx)(l,{sign:"+",count:n,updateCount:this.handleCount.bind(this)})]}):Object(o.jsx)("div",{children:"Loading.."})}}]),e}(c.Component),p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,u=n.getTTFB;e(t),o(t),c(t),r(t),u(t)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),p()},3:function(t){t.exports=JSON.parse('{"BACKEND_URL":"https://github-actions-example-nodejs.herokuapp.com"}')}},[[15,1,2]]]);
//# sourceMappingURL=main.c2681ced.chunk.js.map
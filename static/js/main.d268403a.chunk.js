(this.webpackJsonppictures=this.webpackJsonppictures||[]).push([[0],{22:function(e,t,a){e.exports=a(52)},45:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),s=a(6),u=a.n(s),o=a(19),m=a(2),l=a(3),p=a(4),h=a(5),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSearchSubmit(e.state.term)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search "),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(r.a.Component),v=a(20),d=a.n(v).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID aa3a0584d61ae9bc1c87af7da9ce9f7be5a568c8858c7c5fd100a3566668e885"}}),b=(a(45),a(21)),g=a.n(b),E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.height,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement(g.a,{duration:1200,down:!0},r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans),cursor:"pointer"}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular})))}}]),a}(r.a.Component),S=function(e){var t=e.images.map((function(e){return r.a.createElement(E,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get("https://api.unsplash.com/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(f,{onSearchSubmit:this.onSearchSubmit}),r.a.createElement(S,{images:this.state.images}))}}]),a}(r.a.Component);a(50),a(51);i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d268403a.chunk.js.map
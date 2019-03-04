(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),o=a.n(s),l=a(2),i=a(3),c=a(5),p=a(4),u=a(6),m=(a(81),a(82),a(83),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{action:"submit",onSubmit:this.props.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"postCode"},"Enter a postal code to find local representatives:"),r.a.createElement("input",{className:"headerInput",type:"text",placeholder:"(i.e A1A1A1)",onChange:this.props.handleChange,value:this.props.userPostalCode,required:!0,pattern:"[A-Z][0-9][A-Z][0-9][A-Z][0-9]|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]"}),r.a.createElement("button",{className:"formSubmit headerInput",type:"submit",onClick:this.props.handleClick},"Show me!")))}}]),t}(n.Component)),h=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper formHeader"},r.a.createElement("h1",null,"Know Your government"),r.a.createElement(m,{handleSubmit:this.props.handleSubmit,handleChange:this.props.handleChange,userPostalCode:this.props.userPostalCode,handleClick:this.props.handleClick}))))}}]),t}(n.Component),d=(a(84),a(85),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Representatives"},r.a.createElement("div",{className:"repCard"},r.a.createElement("h2",null,this.props.name),r.a.createElement("p",{className:"riding"},this.props.office),r.a.createElement("p",null,this.props.riding),r.a.createElement("p",null,this.props.party),r.a.createElement("div",{className:"repContact clearfix"},r.a.createElement("a",{href:this.props.phone},r.a.createElement("i",{className:"fas fa-phone","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Call ",this.props.name),this.props.phone),r.a.createElement("a",{href:this.props.email},r.a.createElement("i",{className:"fas fa-envelope","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Email ",this.props.name),this.props.email),this.props.url?r.a.createElement("a",{href:this.props.url,className:"url"},"Visit ",this.props.name,"'s website")||r.a.createElement("a",{href:this.props.personalUrl,className:"url"},"Visit ",this.props.name,"'s website"):null)))}}]),t}(n.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Representatives savedRep"},r.a.createElement("div",{className:"repCard"},r.a.createElement("h2",null,this.props.name),r.a.createElement("p",{className:"riding"},this.props.office),r.a.createElement("p",null,this.props.riding),r.a.createElement("p",null,this.props.party),r.a.createElement("div",{className:"repContact clearfix"},r.a.createElement("a",{href:this.props.phone},r.a.createElement("i",{className:"fas fa-phone","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Call ",this.props.name),this.props.phone),r.a.createElement("a",{href:this.props.email},r.a.createElement("i",{className:"fas fa-envelope","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Email ",this.props.name),this.props.email),this.props.url?r.a.createElement("a",{href:this.props.url,className:"url"},"Visit ",this.props.name,"'s website")||r.a.createElement("a",{href:this.props.personalUrl,className:"url"},"Visit ",this.props.name,"'s website"):null)))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Main"},r.a.createElement("main",{className:"wrapper"},r.a.createElement("section",null,r.a.createElement("h2",{className:"titlePC"},"Representatives for: ",this.props.userPostalCode),r.a.createElement("ul",{className:"repInfo"},this.props.userReps.map(function(e){return r.a.createElement("li",{key:e.key},r.a.createElement(d,{name:e.name,office:e.office,riding:e.riding,party:e.party,email:e.email,phone:e.phone,url:e.url,personalUrl:e.personalUrl}))}),r.a.createElement("button",{className:"button",onClick:this.props.saveButton},"Save reps for ",this.props.userPostalCode),r.a.createElement("button",{className:"button",onClick:this.props.handleClick},"Show my saved reps")),r.a.createElement("button",{className:"button",onClick:this.props.handleClickTop},"Back to top")),r.a.createElement("section",null,r.a.createElement("h2",{className:"titlePC"},"My Saved Reps"),r.a.createElement("div",null,r.a.createElement("ul",{className:"repInfo savedRep"},this.props.savedReps.map(function(t){return console.log(t.key),t.title.map(function(t){return r.a.createElement("li",{key:t.key},r.a.createElement(f,{name:t.name,office:t.office,riding:t.riding,party:t.party,email:t.email,phone:t.phone,url:t.url,personalUrl:t.personalUrl}),r.a.createElement("button",{className:"button",onClick:function(){return e.props.removeButton(t.key)}},"Remove rep"))})}))),r.a.createElement("button",{className:"button",onClick:this.props.handleClickTop},"Back to top"))))}}]),t}(n.Component),E=(a(86),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("footer",null,"Know Your Government | Data Provided by ",r.a.createElement("a",{href:"https://represent.opennorth.ca/"},"Represent")))}}]),t}(n.Component)),b=a(54),C=a(55),y=a.n(C);y.a.initializeApp({apiKey:"AIzaSyB35apiwRzurbwgK47HavC3uT4YUlkAHsM",authDomain:"know-your-government-35104.firebaseapp.com",databaseURL:"https://know-your-government-35104.firebaseio.com",projectId:"know-your-government-35104",storageBucket:"know-your-government-35104.appspot.com",messagingSenderId:"690763001616"});var k=y.a,N=a(75),j=a.n(N),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(p.a)(t).call(this))).handleClick=function(){b.animateScroll.scrollMore(700,{duration:2800,delay:200,smooth:!0})},e.handleClickTop=function(){b.animateScroll.scrollToTop({duration:2800,delay:200,smooth:!0})},e.saveButton=function(t){t.preventDefault(),k.database().ref().push(e.state.userReps)},e.removeButton=function(t){e.state.savedReps.forEach(function(e){e.key&&e.title.forEach(function(a){a.key===t&&k.database().ref(e.key).remove()})})},e.handleSubmit=function(t){t.preventDefault(),j()({method:"GET",url:"http://proxy.hackeryou.com",dataResponse:"json",params:{reqUrl:"https://represent.opennorth.ca/postcodes/".concat(e.state.userPostalCode),xmlToJSON:!1}}).then(function(t){var a=t.data.representatives_centroid,n=[],r=[],s=[];a.forEach(function(e){!1===r.includes(e.name)&&(r.push(e.name),n.push(e))}),n.forEach(function(e){var t={key:e.last_name,name:e.name,office:e.elected_office,riding:e.district_name,party:e.party_name,email:e.email,phone:e.offices[0].tel,url:e.url,personalUrl:e.personal_url};s.push(t)}),e.setState({userReps:s,show:!0})})},e.handleChange=function(t){t.target.value=t.target.value.toUpperCase(),t.target.value.indexOf(" ")>=0?e.setState({userPostalCode:t.target.value.replace(/\s/g,"")}):e.setState({userPostalCode:t.target.value})},e.state={userReps:[],savedReps:[],userPostalCode:"",show:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.database().ref().on("value",function(t){var a=[],n=t.val();for(var r in n)a.push({key:r,title:n[r]});e.setState({savedReps:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,userPostalCode:this.state.userPostalCode,handleClick:this.handleClick}),!0===this.state.show?r.a.createElement(v,{id:"results",handleClickTop:this.handleClickTop,userReps:this.state.userReps,savedReps:this.state.savedReps,handleClick:this.handleClick,userPostalCode:this.state.userPostalCode,saveButton:this.saveButton,removeButton:this.removeButton}):null,r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a(169)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.6c19034c.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{2579:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contato",function(){return t(2740)}])},5866:function(e,n,t){"use strict";var s=t(5893),r=t(7294),o=t(9544),i=t(8595),a=t(6992),c=t(5614),l=t(8746),d=t(7243),u=t(3999),f=t(8008);n.Z=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1];return(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,{color:"info",dark:!0,expand:"md",className:"fixed-top",children:(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(a.Z,{href:"/",children:"Sibre"}),(0,s.jsx)(c.Z,{onClick:function(){return t(!n)}}),(0,s.jsxs)(l.Z,{isOpen:n,navbar:!0,children:[(0,s.jsxs)(d.Z,{className:"mr-auto",navbar:!0,children:[(0,s.jsx)(u.Z,{children:(0,s.jsx)(f.Z,{href:"/home",children:"Home"})}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(f.Z,{href:"/comunhao",children:"Comunh\xe3o"})}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(f.Z,{href:"/seminario",children:"Semin\xe1rio"})}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(f.Z,{href:"/contato",children:"Contato"})}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(f.Z,{href:"/sobre",children:"Sobre"})})]}),(0,s.jsx)(a.Z,{href:"http://207.244.238.40:15521",children:"Adminstrativo"})]})]})})})}},2740:function(e,n,t){"use strict";t.r(n);var s=t(7568),r=t(4924),o=t(6042),i=t(9396),a=t(655),c=t(5893),l=t(7294),d=t(9008),u=t.n(d),f=t(5866),m=t(6235),p=t(8595),h=t(5538),g=t(7905),b=t(7954),x=t(609),j=t(7975);n.default=function(){var e=(0,l.useState)({nome:"",email:"",assuntoMsg:"",conteudoMsg:""}),n=e[0],t=e[1],d=function(e){return t((0,i.Z)((0,o.Z)({},n),(0,r.Z)({},e.target.name,e.target.value)))},v=(0,l.useState)({formSave:!1,type:"",message:"",formSuccess:!1}),y=v[0],Z=v[1],N=function(){var e=(0,s.Z)((function(e){var s,r,o,i;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(e.preventDefault(),console.log(n),!C())return[2];Z({formSave:!0}),console.log("Iniciando envio da mensagem..."),a.label=1;case 1:return a.trys.push([1,7,,8]),[4,fetch("https://site-sibre.netlify.app/contato",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})];case 2:return s=a.sent(),(r=s.headers.get("content-type"))&&r.includes("application/json")?[4,s.json()]:[3,4];case 3:return o=a.sent(),[3,6];case 4:return[4,s.text()];case 5:o=a.sent(),a.label=6;case 6:return console.log(o),"object"===typeof o&&o.error?Z({formSave:!1,type:"error",message:o.message}):(Z({formSave:!0,type:"success",message:"Mensagem enviada com sucesso!",formSuccess:!0}),t({nome:"",email:"",assuntoMsg:"",conteudoMsg:""})),[3,8];case 7:return i=a.sent(),console.error("Erro no envio da mensagem:",i),Z({formSave:!1,type:"error",message:"Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."}),[3,8];case 8:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),C=function(){return n.nome?n.email?n.assuntoMsg?!!n.conteudoMsg||Z({type:"error",message:"Preencha o campo conte\xfado da mensagem!"}):Z({type:"error",message:"Preencha o campo assunto da mensagem!"}):Z({type:"error",message:"Preencha o campo e-mail!"}):Z({type:"error",message:"Preencha o campo nome!"})};return(0,c.jsxs)("div",{children:[(0,c.jsxs)(u(),{children:[(0,c.jsx)("title",{children:"Contato"}),(0,c.jsx)("meta",{name:"robots",content:"index, follow"}),(0,c.jsx)("meta",{name:"description",content:"Entre em contato com a Segunda Igreja Batista no Recanto das Emas-DF"}),(0,c.jsx)("meta",{name:"author",content:"Ernilson Daniel Lima de Souza"})]}),(0,c.jsx)(f.Z,{}),(0,c.jsxs)(m.Z,{fluid:!0,className:"head-contato",children:[(0,c.jsx)("style",{children:".head-contato{\n                padding-top: 60px;\n                padding-buttom:5px;\n                background-color: #fff;\n                margin-bottom: 0ren ! important;\n         }"}),(0,c.jsx)(p.Z,{children:(0,c.jsx)("h1",{className:"display-8 text-center",children:"Contato"})})]}),(0,c.jsxs)(m.Z,{fluid:!0,className:"form-contato",children:[(0,c.jsx)("style",{children:".head-contato{\n                padding-top: 60px;\n                padding-buttom:5px;\n                background-color: #fff;\n                margin-bottom: 0ren ! important;\n         }"}),(0,c.jsx)(p.Z,{children:(0,c.jsxs)("div",{className:"row featurette",children:[(0,c.jsxs)("div",{className:"col-md-6",children:["success"===y.type?(0,c.jsx)("div",{className:"alert alert-success",children:y.message}):"","error"===y.type?(0,c.jsx)("div",{className:"alert alert-danger",children:y.message}):"",(0,c.jsxs)(h.Z,{onSubmit:N,children:[(0,c.jsxs)(g.Z,{children:[(0,c.jsxs)(b.Z,{for:"nome",children:[(0,c.jsx)("span",{className:"text-danger",children:"*"})," Nome:"]}),(0,c.jsx)(x.Z,{type:"text",name:"nome",id:"nome",placeholder:"Digite Seu Nome...",onChange:d})]}),(0,c.jsxs)(g.Z,{children:[(0,c.jsx)(b.Z,{for:"email",children:"Email:"}),(0,c.jsx)(x.Z,{type:"email",name:"email",id:"email",placeholder:"Digite Seu Email...",onChange:d})]}),(0,c.jsxs)(g.Z,{children:[(0,c.jsx)(b.Z,{for:"assuntoMsg",children:"Assunto da Mensagem:"}),(0,c.jsx)(x.Z,{type:"text",name:"assuntoMsg",id:"assuntoMsg",placeholder:"Digite o assunto...",onChange:d})]}),(0,c.jsxs)(g.Z,{children:[(0,c.jsxs)(b.Z,{for:"conteudoMsg",children:[(0,c.jsx)("span",{className:"text-danger",children:"*"})," Mensagem:"]}),(0,c.jsx)(x.Z,{type:"textarea",name:"conteudoMsg",id:"conteudoMsg",placeholder:"Digite sua mensagem...",onChange:d})]}),y.formSave?(0,c.jsx)(j.Z,{type:"submit",outline:!0,color:"warning",disabled:!0,children:"Enviar..."}):(0,c.jsx)(j.Z,{type:"submit",outline:!0,color:"warning",children:"Enviar"})]})]}),(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("br",{}),(0,c.jsx)("h3",{className:"featurette-heading",children:"Contribua com o Reino "}),(0,c.jsx)("p",{className:"lead",children:"Banco-PagSeguro: N\xba-290, Ag\xeancia: 0001, Conta: 051116937, Tipo: Conta de Pagamento, pix CNPJ: 186855200001/40 - Pix:sibre25@gmail.com"}),(0,c.jsx)("hr",{}),(0,c.jsxs)("address",{children:[(0,c.jsx)("strong",{children:"Endere\xe7o"}),(0,c.jsx)("br",{}),"Quadra 105 Area Especial 01 ",(0,c.jsx)("br",{}),"Av. Vargem das Ben\xe7\xe3o Recanto das Emas- DF",(0,c.jsx)("br",{}),"(61)991323236 ",(0,c.jsx)("br",{})]})]})]})})]})]})}},7975:function(e,n,t){"use strict";var s=t(7462),r=t(3366),o=t(7326),i=t(4578),a=t(7294),c=t(5697),l=t.n(c),d=t(4184),u=t.n(d),f=t(3663),m={active:l().bool,"aria-label":l().string,block:l().bool,color:l().string,disabled:l().bool,outline:l().bool,tag:f.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),onClick:l().func,size:l().string,children:l().node,className:l().string,cssModule:l().object,close:l().bool},p=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind((0,o.Z)(t)),t}(0,i.Z)(n,e);var t=n.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,n=e.active,t=e["aria-label"],o=e.block,i=e.className,c=e.close,l=e.cssModule,d=e.color,m=e.outline,p=e.size,h=e.tag,g=e.innerRef,b=(0,r.Z)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof b.children&&(b.children=a.createElement("span",{"aria-hidden":!0},"\xd7"));var x="btn"+(m?"-outline":"")+"-"+d,j=(0,f.mx)(u()(i,{close:c},c||"btn",c||x,!!p&&"btn-"+p,!!o&&"btn-block",{active:n,disabled:this.props.disabled}),l);b.href&&"button"===h&&(h="a");var v=c?"Close":null;return a.createElement(h,(0,s.Z)({type:"button"===h&&b.onClick?"button":void 0},b,{className:j,ref:g,onClick:this.onClick,"aria-label":t||v}))},n}(a.Component);p.propTypes=m,p.defaultProps={color:"secondary",tag:"button"},n.Z=p},5538:function(e,n,t){"use strict";var s=t(7462),r=t(3366),o=t(7326),i=t(4578),a=t(7294),c=t(5697),l=t.n(c),d=t(4184),u=t.n(d),f=t(3663),m={children:l().node,inline:l().bool,tag:f.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),className:l().string,cssModule:l().object},p=function(e){function n(n){var t;return(t=e.call(this,n)||this).getRef=t.getRef.bind((0,o.Z)(t)),t.submit=t.submit.bind((0,o.Z)(t)),t}(0,i.Z)(n,e);var t=n.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,n=e.className,t=e.cssModule,o=e.inline,i=e.tag,c=e.innerRef,l=(0,r.Z)(e,["className","cssModule","inline","tag","innerRef"]),d=(0,f.mx)(u()(n,!!o&&"form-inline"),t);return a.createElement(i,(0,s.Z)({},l,{ref:c,className:d}))},n}(a.Component);p.propTypes=m,p.defaultProps={tag:"form"},n.Z=p},7905:function(e,n,t){"use strict";var s=t(7462),r=t(3366),o=t(7294),i=t(5697),a=t.n(i),c=t(4184),l=t.n(c),d=t(3663),u={children:a().node,row:a().bool,check:a().bool,inline:a().bool,disabled:a().bool,tag:d.iC,className:a().string,cssModule:a().object},f=function(e){var n=e.className,t=e.cssModule,i=e.row,a=e.disabled,c=e.check,u=e.inline,f=e.tag,m=(0,r.Z)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=(0,d.mx)(l()(n,!!i&&"row",c?"form-check":"form-group",!(!c||!u)&&"form-check-inline",!(!c||!a)&&"disabled"),t);return"fieldset"===f&&(m.disabled=a),o.createElement(f,(0,s.Z)({},m,{className:p}))};f.propTypes=u,f.defaultProps={tag:"div"},n.Z=f},609:function(e,n,t){"use strict";var s=t(7462),r=t(3366),o=t(7326),i=t(4578),a=t(7294),c=t(5697),l=t.n(c),d=t(4184),u=t.n(d),f=t(3663),m={children:l().node,type:l().string,size:l().oneOfType([l().number,l().string]),bsSize:l().string,valid:l().bool,invalid:l().bool,tag:f.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),plaintext:l().bool,addon:l().bool,className:l().string,cssModule:l().object},p=function(e){function n(n){var t;return(t=e.call(this,n)||this).getRef=t.getRef.bind((0,o.Z)(t)),t.focus=t.focus.bind((0,o.Z)(t)),t}(0,i.Z)(n,e);var t=n.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,n=e.className,t=e.cssModule,o=e.type,i=e.bsSize,c=e.valid,l=e.invalid,d=e.tag,m=e.addon,p=e.plaintext,h=e.innerRef,g=(0,r.Z)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(o)>-1,x=new RegExp("\\D","g"),j=d||("select"===o||"textarea"===o?o:"input"),v="form-control";p?(v+="-plaintext",j=d||"input"):"file"===o?v+="-file":"range"===o?v+="-range":b&&(v=m?null:"form-check-input"),g.size&&x.test(g.size)&&((0,f.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var y=(0,f.mx)(u()(n,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,v),t);return("input"===j||d&&"function"===typeof d)&&(g.type=o),g.children&&!p&&"select"!==o&&"string"===typeof j&&"select"!==j&&((0,f.O4)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),a.createElement(j,(0,s.Z)({},g,{ref:h,className:y,"aria-invalid":l}))},n}(a.Component);p.propTypes=m,p.defaultProps={type:"text"},n.Z=p},7954:function(e,n,t){"use strict";var s=t(7462),r=t(3366),o=t(7294),i=t(5697),a=t.n(i),c=t(4184),l=t.n(c),d=t(3663),u=a().oneOfType([a().number,a().string]),f=a().oneOfType([a().bool,a().string,a().number,a().shape({size:u,order:u,offset:u})]),m={children:a().node,hidden:a().bool,check:a().bool,size:a().string,for:a().string,tag:d.iC,className:a().string,cssModule:a().object,xs:f,sm:f,md:f,lg:f,xl:f,widths:a().array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,n,t){return!0===t||""===t?e?"col":"col-"+n:"auto"===t?e?"col-auto":"col-"+n+"-auto":e?"col-"+t:"col-"+n+"-"+t},g=function(e){var n=e.className,t=e.cssModule,i=e.hidden,a=e.widths,c=e.tag,u=e.check,f=e.size,m=e.for,p=(0,r.Z)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];a.forEach((function(n,s){var r=e[n];if(delete p[n],r||""===r){var o,i=!s;if((0,d.Kn)(r)){var a,c=i?"-":"-"+n+"-";o=h(i,n,r.size),g.push((0,d.mx)(l()(((a={})[o]=r.size||""===r.size,a["order"+c+r.order]=r.order||0===r.order,a["offset"+c+r.offset]=r.offset||0===r.offset,a))),t)}else o=h(i,n,r),g.push(o)}}));var b=(0,d.mx)(l()(n,!!i&&"sr-only",!!u&&"form-check-label",!!f&&"col-form-label-"+f,g,!!g.length&&"col-form-label"),t);return o.createElement(c,(0,s.Z)({htmlFor:m},p,{className:b}))};g.propTypes=m,g.defaultProps=p,n.Z=g},7568:function(e,n,t){"use strict";function s(e,n,t,s,r,o,i){try{var a=e[o](i),c=a.value}catch(l){return void t(l)}a.done?n(c):Promise.resolve(c).then(s,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){s(i,r,o,a,c,"next",e)}function c(e){s(i,r,o,a,c,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return r}})},9396:function(e,n,t){"use strict";function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}t.d(n,{Z:function(){return s}})}},function(e){e.O(0,[203,774,888,179],(function(){return n=2579,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
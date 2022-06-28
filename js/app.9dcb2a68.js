(function(){"use strict";var e={7951:function(e,t,a){var i=a(525),s=a(3396);function r(e,t,a,i,r,l){const n=(0,s.up)("app-header"),o=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(n),(0,s.Wm)(o)],64)}var l=a.p+"img/logo.42d8385b.svg",n=a.p+"img/phone.b371df4d.svg",o=a.p+"img/mail.599d3e24.svg";const c={class:"header"},d=(0,s.uE)('<div class="container" data-v-a0ab8018><nav class="header__nav nav" data-v-a0ab8018><img src="'+l+'" alt="" class="nav__logo" data-v-a0ab8018><ul class="nav__links" data-v-a0ab8018><li class="nav__links-item link" data-v-a0ab8018><a href="tel:88000000000" data-v-a0ab8018>8 800 000 00 00</a></li><li class="nav__links-item link" data-v-a0ab8018><a href="mailto:sales@logo.ru" data-v-a0ab8018>sales@logo.ru</a></li><li class="nav__links-item phone" data-v-a0ab8018><a href="tel:88000000000" data-v-a0ab8018><img src="'+n+'" alt="" data-v-a0ab8018></a></li><li class="nav__links-item mail" data-v-a0ab8018><a href="mailto:sales@logo.ru" data-v-a0ab8018><img src="'+o+'" alt="" data-v-a0ab8018></a></li></ul></nav></div>',1),_=[d];function u(e,t,a,i,r,l){return(0,s.wg)(),(0,s.iD)("header",c,_)}var p={name:"AppHeader"},v=a(89);const f=(0,v.Z)(p,[["render",u],["__scopeId","data-v-a0ab8018"]]);var h=f,m=a(65),A={components:{AppHeader:h},methods:{...(0,m.nv)(["fetchCards"])},mounted(){this.fetchCards()}};const T=(0,v.Z)(A,[["render",r]]);var b=T,g=a(678);function O(e,t,a,i,r,l){const n=(0,s.up)("app-body"),o=(0,s.up)("app-footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(n),(0,s.Wm)(o)],64)}const w=e=>((0,s.dD)("data-v-953f28d6"),e=e(),(0,s.Cn)(),e),D={class:"wrap"},S={class:"container"},E={key:0,class:"card__wrapper"},R={key:1,class:"message"},H=(0,s.Uk)("Ничего не нашлось :( "),U=w((()=>(0,s._)("br",null,null,-1))),k=(0,s.Uk)("Попробуйте изменить параметры фильтрации"),y=[H,U,k];function C(e,t,a,i,r,l){const n=(0,s.up)("app-slide"),o=(0,s.up)("sticky-filter"),c=(0,s.up)("app-card");return(0,s.wg)(),(0,s.iD)("main",D,[(0,s.Wm)(n),(0,s._)("div",S,[(0,s.Wm)(o),l.filteredArticlesAuthorAndDate.length>0?((0,s.wg)(),(0,s.iD)("section",E,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.filteredArticlesAuthorAndDate,((e,t)=>((0,s.wg)(),(0,s.j4)(c,{class:"card__wrapper--item",key:t,article:e},null,8,["article"])))),128))])):((0,s.wg)(),(0,s.iD)("h2",R,y))])])}var F=a(7139),I=a(9242);const M={class:"card"},L={class:"card__date"},Z=["title"],j={class:"card__title--truncated"},W=["title"],x={class:"card__description--truncated"};function z(e,t,a,i,r,l){return(0,s.wg)(),(0,s.iD)("article",M,[(0,s._)("time",L,(0,F.zw)(l.date),1),(0,s._)("div",{class:"card__title",title:a.article.title},[(0,s._)("h2",j,(0,F.zw)(a.article.title),1)],8,Z),(0,s._)("div",{class:"card__description",title:a.article.description},[(0,s._)("p",x,(0,F.zw)(a.article.description),1)],8,W),(0,s.wy)((0,s._)("a",{href:"#",class:"card__author",onClick:t[0]||(t[0]=(0,I.withModifiers)(((...e)=>l.selectAUTHOR&&l.selectAUTHOR(...e)),["prevent"]))},(0,F.zw)(a.article.author),513),[[I.vShow,null!==a.article.author]])])}var P={name:"AppCard",props:{article:Object},computed:{date(){return new Date(this.article.publishedAt).toUTCString().split(" ").slice(1,4).join(" ")}},methods:{...(0,m.OI)(["SELECT_AUTHOR"]),selectAUTHOR(){this.SELECT_AUTHOR(this.article.author)}}};const q=(0,v.Z)(P,[["render",z],["__scopeId","data-v-60f8a8ab"]]);var Y=q;const V={class:"filter__wrap"};function B(e,t,a,i,r,l){const n=(0,s.up)("app-select"),o=(0,s.up)("app-set-date");return(0,s.wg)(),(0,s.iD)("section",V,[(0,s.Wm)(n,{class:"filter__item",AUTHORS:e.AUTHORS},null,8,["AUTHORS"]),(0,s.Wm)(o,{class:"filter__item"})])}var K=a.p+"img/icon-author.023632f8.svg",X=a.p+"img/icon-arrow.c05ca4ef.svg";const G={class:"select__wrap"},J={class:"select__selected_placeholder"},N={class:"select__items_wrap"},Q=["onClick"];function $(e,t,a,i,r,l){return(0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("div",{class:"select__selected",onClick:t[1]||(t[1]=(0,I.withModifiers)((e=>r.openSelect=!r.openSelect),["stop"]))},[(0,s._)("img",{src:K,class:"select__selected_icon",onClick:t[0]||(t[0]=(0,I.withModifiers)((t=>e.SELECT_AUTHOR("")),["stop"])),title:"Обнулить выбор"}),(0,s._)("div",J,(0,F.zw)(e.selectedAUTHOR?e.selectedAUTHOR:"Выбор автора"),1),(0,s._)("img",{src:X,alt:"",class:(0,F.C_)(["select__selected_arrow",{_active:r.openSelect}])},null,2)]),(0,s.wy)((0,s._)("div",{class:"select__items",onClick:t[2]||(t[2]=(0,I.withModifiers)((()=>{}),["stop"]))},[(0,s._)("ol",N,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.filteredAUTHORS,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"select__item",onClick:t=>l.selectAUTHOR(e)},(0,F.zw)(e),9,Q)))),256))])],512),[[I.vShow,r.openSelect]])])}var ee={name:"AppSelect",props:{AUTHORS:Array},data(){return{openSelect:!1}},computed:{...(0,m.rn)(["selectedAUTHOR"]),filteredAUTHORS(){return this.AUTHORS.filter((e=>null!==e))}},methods:{...(0,m.OI)(["SELECT_AUTHOR"]),selectAUTHOR(e){this.SELECT_AUTHOR(e),this.openSelect=!1}},mounted(){document.addEventListener("click",(()=>this.openSelect=!1))}};const te=(0,v.Z)(ee,[["render",$]]);var ae=te;const ie=e=>((0,s.dD)("data-v-3a362fca"),e=e(),(0,s.Cn)(),e),se={class:"date__wrap"},re={class:"date__wrap--item"},le=ie((()=>(0,s._)("label",{for:"from"},"От",-1))),ne=ie((()=>(0,s._)("span",null,"-",-1))),oe={class:"date__wrap--item"},ce=ie((()=>(0,s._)("label",{for:"to"},"До",-1)));function de(e,t,a,i,r,l){return(0,s.wg)(),(0,s.iD)("div",se,[(0,s._)("div",re,[le,(0,s.wy)((0,s._)("input",{id:"from",required:"required",class:"date__input",type:"date",onInput:t[0]||(t[0]=(...e)=>l.selectDate&&l.selectDate(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>r.dateFrom=e)},null,544),[[I.vModelText,r.dateFrom]])]),ne,(0,s._)("div",oe,[ce,(0,s.wy)((0,s._)("input",{id:"to",required:"required",class:"date__input",type:"date",onInput:t[2]||(t[2]=(...e)=>l.selectDate&&l.selectDate(...e)),"onUpdate:modelValue":t[3]||(t[3]=e=>r.dateTo=e)},null,544),[[I.vModelText,r.dateTo]])])])}var _e={name:"AppSetDate",data(){return{dateFrom:"",dateTo:""}},methods:{...(0,m.OI)(["SET_DATE_FROM","SET_DATE_TO"]),selectDate(){new Date(this.dateFrom)>new Date(this.dateTo)&&([this.dateFrom,this.dateTo]=[this.dateTo,this.dateFrom]),this.SET_DATE_FROM(this.dateFrom),this.SET_DATE_TO(this.dateTo)}}};const ue=(0,v.Z)(_e,[["render",de],["__scopeId","data-v-3a362fca"]]);var pe=ue,ve={name:"StickyFilter",components:{AppSetDate:pe,AppSelect:ae},computed:{...(0,m.rn)(["AUTHORS"])}};const fe=(0,v.Z)(ve,[["render",B],["__scopeId","data-v-1343d510"]]);var he=fe;const me={class:"slider"};function Ae(e,t,a,i,r,l){const n=(0,s.up)("vue-carousel");return(0,s.wg)(),(0,s.iD)("section",me,[(0,s.Wm)(n,{data:r.data},null,8,["data"])])}const Te={class:"wrap"},be=(0,s.uE)('<div class="container" data-v-0b405ebe><div class="slide" data-v-0b405ebe><h1 class="slide__title" data-v-0b405ebe>Как бизнесу сохранять<br data-v-0b405ebe>IT-кадры на фоне кризиса</h1><p class="slide__text" data-v-0b405ebe>Инструменты, которые могут использовать компании для удержания сотрудников</p><button class="slide__btn" data-v-0b405ebe>Подробнее</button></div></div>',1),ge=[be];function Oe(e,t,a,i,r,l){return(0,s.wg)(),(0,s.iD)("div",Te,ge)}var we={name:"AppSlide"};const De=(0,v.Z)(we,[["render",Oe],["__scopeId","data-v-0b405ebe"]]);var Se=De,Ee=a(4870),Re={name:"AppSlide",components:{AppSlide:Se},template:(0,Ee.Xl)(Se),data(){return{data:[Se,Se,Se]}}};const He=(0,v.Z)(Re,[["render",Ae]]);var Ue=He,ke={name:"AppBody",components:{AppSlide:Ue,StickyFilter:he,AppCard:Y},computed:{...(0,m.rn)(["ARTICLES","selectedAUTHOR","DATE_FROM","DATE_TO"]),filteredArticlesAuthor(){return""===this.selectedAUTHOR?this.ARTICLES:this.ARTICLES.filter((e=>e.author===this.selectedAUTHOR))},filteredArticlesAuthorAndDate(){return this.filteredArticlesAuthor.filter((e=>""===this.DATE_FROM&&""===this.DATE_TO||""===this.DATE_FROM&&new Date(e.publishedAt)<new Date(this.DATE_TO)||""===this.DATE_TO&&new Date(e.publishedAt)>new Date(this.DATE_FROM)||new Date(e.publishedAt)>new Date(this.DATE_FROM)&&new Date(e.publishedAt)<new Date(this.DATE_TO)))}}};const ye=(0,v.Z)(ke,[["render",C],["__scopeId","data-v-953f28d6"]]);var Ce=ye,Fe=a.p+"img/logo-footer.65363eea.svg",Ie=a.p+"img/icon-social-1.244707d3.svg",Me=a.p+"img/icon-social-2.510206ce.svg",Le=a.p+"img/icon-social-3.c664586a.svg",Ze=a.p+"img/icon-social-4.d99fed02.svg";const je={class:"footer__wrap"},We=(0,s.uE)('<div class="container" data-v-6351600d><ul class="footer__links" data-v-6351600d><li class="footer__links-logo" data-v-6351600d><a href="#" data-v-6351600d><img src="'+Fe+'" alt="" data-v-6351600d></a></li><li class="footer__links-item" data-v-6351600d><a href="#" data-v-6351600d>Готовые решения</a></li><li class="footer__links-item" data-v-6351600d><a href="#" data-v-6351600d>О нас</a></li><li class="footer__links-item" data-v-6351600d><a href="#" data-v-6351600d>Блог</a></li><li class="footer__links-item" data-v-6351600d><a href="#" data-v-6351600d>Контакты</a></li></ul><ul class="footer__social" data-v-6351600d><li class="footer__social-item footer__social-copy" data-v-6351600d><small data-v-6351600d>© ООО «Лого», 2008—2022</small></li><li class="footer__social-item" data-v-6351600d><a href="#" data-v-6351600d><img src="'+Ie+'" alt="" data-v-6351600d></a></li><li class="footer__social-item" data-v-6351600d><a href="#" data-v-6351600d><img src="'+Me+'" alt="" data-v-6351600d></a></li><li class="footer__social-item" data-v-6351600d><a href="#" data-v-6351600d><img src="'+Le+'" alt="" data-v-6351600d></a></li><li class="footer__social-item" data-v-6351600d><a href="#" data-v-6351600d><img src="'+Ze+'" alt="" data-v-6351600d></a></li></ul></div>',1),xe=[We];function ze(e,t,a,i,r,l){return(0,s.wg)(),(0,s.iD)("footer",je,xe)}var Pe={name:"AppFooter"};const qe=(0,v.Z)(Pe,[["render",ze],["__scopeId","data-v-6351600d"]]);var Ye=qe,Ve={name:"HomeView",components:{AppFooter:Ye,AppBody:Ce}};const Be=(0,v.Z)(Ve,[["render",O]]);var Ke=Be;const Xe=[{path:"/",name:"home",component:Ke}],Ge=(0,g.p7)({history:(0,g.PO)("/test-paraveb/"),routes:Xe});var Je=Ge,Ne=(a(6699),(0,m.MT)({state:{ARTICLES:[],AUTHORS:[],selectedAUTHOR:"",DATE_FROM:"",DATE_TO:""},getters:{},mutations:{ADD_AUTHOR(e,t){e.AUTHORS.includes(t)||null===t||e.AUTHORS.push(t)},ADD_ARTICLE(e,t){e.ARTICLES.push(t)},SELECT_AUTHOR(e,t){e.selectedAUTHOR=t},SET_DATE_FROM(e,t){e.DATE_FROM=t},SET_DATE_TO(e,t){e.DATE_TO=t}},actions:{fetchCards({commit:e}){fetch("https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc").then((e=>e.json())).then((t=>t.articles.forEach((t=>{console.dir(t),e("ADD_AUTHOR",t.author);let a={};a.title=t.title,a.description=t.description,a.publishedAt=t.publishedAt,a.author=t.author,e("ADD_ARTICLE",a)}))))}}})),Qe=a(2054);(0,i.ri)(b).use(Ne).use(Je).component(Qe.Z.name,Qe.Z).mount("#app")}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,r){if(!i){var l=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],r=e[d][2];for(var n=!0,o=0;o<i.length;o++)(!1&r||l>=r)&&Object.keys(a.O).every((function(e){return a.O[e](i[o])}))?i.splice(o--,1):(n=!1,r<l&&(l=r));if(n){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/test-paraveb/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,r,l=i[0],n=i[1],o=i[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(o)var d=o(a)}for(t&&t(i);c<l.length;c++)r=l[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},i=self["webpackChunktest_paraveb"]=self["webpackChunktest_paraveb"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(7951)}));i=a.O(i)})();
//# sourceMappingURL=app.9dcb2a68.js.map
import{o as f,i as p,b as e,y as L,d as E,t as b,aQ as g,r as i,m as V,ax as A,a as w,k,n as x,bA as M,F as S,l as C}from"./entry.043f00b6.js";const T={class:"radio-default"},z=["onInput","value","checked"],B=e("span",{class:"radio-default__radio"},null,-1),N={class:"radio-default__label"},$={__name:"RadioDefault",props:{modelValue:{default:null},value:{default:null},label:{type:String,default:""}},emits:["input","update:modelValue"],setup(n,{emit:c}){const a=n,v=()=>{c("input",a.value),c("update:modelValue",a.value)};return(_,t)=>(f(),p("label",T,[e("input",{onInput:L(v,["stop"]),value:n.modelValue,checked:n.modelValue===n.value,type:"radio",class:"radio-default__input"},null,40,z),B,e("span",N,[E(b(n.label)+" ",1),g(_.$slots,"default")])]))}};const R={class:"vdelo-advantages"},F={class:"container"},D=e("h2",{class:"title off-lower-case"}," преимущества работы с ВДело ",-1),W={class:"vdelo-advantages__radio flex space-x-4 lg:space-x-0 lg:space-y-4 lg:flex-col"},X={class:"vdelo-advantages__part vdelo-advantages__part_left w-full lg:w-1/2 lg:-mb-8"},Y={class:"cube__face cube__face_front"},H={class:"cube__content cube__content_title"},J={class:"cube__face cube__face_back"},O={class:"cube__content cube__content_title"},Z={class:"cube__face cube__face_top"},P={class:"cube__content cube__content_title"},Q={class:"cube__face cube__face_bottom"},U={class:"cube__content cube__content_title"},j={class:"vdelo-advantages__part vdelo-advantages__part_right w-full lg:w-1/2 lg:pr-8"},q={class:"cube__face cube__face_front"},G={class:"cube__content cube__content_article"},K={class:"cube__face cube__face_back"},ee={class:"cube__content cube__content_article"},te={class:"cube__face cube__face_top"},ae={class:"cube__content cube__content_article"},le={class:"cube__face cube__face_bottom"},se={class:"cube__content cube__content_article"},fe={__name:"VdeloAdvantages",props:{title1:{type:String,default:""},title2:{type:String,default:""},title3:{type:String,default:""},title4:{type:String,default:""},titleClass:{type:String,default:""}},setup(n){const c=i(0),a=i(0),v=i(null),_=i(!0),t=i(0),u=i("1s"),h=()=>{window.innerWidth<1024&&c.value!==0&&(u.value="0s",c.value=0,setTimeout(()=>{u.value="1s"},500)),window.innerWidth>=1024&&a.value!==0&&(u.value="0s",a.value=0,setTimeout(()=>{u.value="1s"},500))},o=()=>{_.value=!0},m=()=>{_.value=!1},l=()=>{r("forward"),d()},d=()=>{clearInterval(v.value)},y=s=>{if(t.value-s!==0){if(d(),Math.abs(t.value-s)===1){t.value-s===-1?r("forward"):r("back");return}if(Math.abs(t.value-s)===2){r("forward"),r("forward");return}if(Math.abs(t.value-s)===3){t.value-s===-3?r("back"):r("forward");return}}},r=s=>{window.innerWidth<1024?(s==="back"&&(a.value-=90,t.value--),s==="forward"&&(a.value+=90,t.value++)):(s==="back"&&(c.value-=90,t.value--),s==="forward"&&(c.value+=90,t.value++)),t.value<0&&(t.value=3),t.value>3&&(t.value=0)},I=()=>{v.value=setInterval(()=>{_.value&&r("forward")},5e3)};return V(()=>{I(),window.addEventListener("focus",o),window.addEventListener("blur",m),window.addEventListener("resize",h)}),A(()=>{window.removeEventListener("focus",o),window.removeEventListener("blur",m),window.removeEventListener("resize",h),d()}),(s,re)=>(f(),p("section",R,[e("div",F,[D,e("div",W,[w($,{"model-value":t.value,onInput:y,value:0},null,8,["model-value"]),w($,{"model-value":t.value,onInput:y,value:1},null,8,["model-value"]),w($,{"model-value":t.value,onInput:y,value:2},null,8,["model-value"]),w($,{"model-value":t.value,onInput:y,value:3},null,8,["model-value"])]),e("div",{class:"flex flex-wrap pb-16 pt-6 lg:pt-20 cursor-pointer prevent-select",onClick:l},[e("div",X,[e("div",{class:k(["cube cube_title",n.titleClass]),style:x({transform:`translateZ(-175px) rotateX(${-c.value}deg) rotateY(${-a.value}deg)`,"transition-duration":u.value}),ref:"leftCube"},[e("div",Y,[e("div",H,b(n.title1),1)]),e("div",J,[e("div",O,b(n.title2),1)]),e("div",Z,[e("div",P,b(n.title3),1)]),e("div",Q,[e("div",U,b(n.title4),1)])],6)]),e("div",j,[e("div",{class:"cube cube_article",style:x({transform:`translateZ(-175px) rotateX(${c.value}deg) rotateY(${a.value}deg)`,"transition-duration":u.value}),ref:"leftCube"},[e("div",q,[e("div",G,[g(s.$slots,"article1")])]),e("div",K,[e("div",ee,[g(s.$slots,"article2")])]),e("div",te,[e("div",ae,[g(s.$slots,"article3")])]),e("div",le,[e("div",se,[g(s.$slots,"article4")])])],4)])])])]))}};const ne={class:"container"},ce={class:"row"},ie={class:"w-full md:w-6/12 lg:w-7/12"},oe={class:"title advice-slider__title mt-8"},_e={class:"advice-slider__article"},ue=["innerHTML"],de=["src"],pe={__name:"AdviceSlider",props:{title:{type:String,default:""},slides:{type:Array,default:[]}},setup(n){const c=n,a=i([]),v=i(0),_=i(null),t=i(!1),u=()=>{h(),clearInterval(_.value)},h=()=>{if(t.value)return;const o=a.value.find(d=>d.type==="active"),m=a.value.find(d=>d.type==="next");o.type="prev",m.type="active",t.value=!0,setTimeout(d=>{t.value=!1,a.value.shift()},300);const l=JSON.parse(JSON.stringify(o));l.id=v.value++,l.type="next",a.value.push(l)};return V(()=>{a.value=M(c.slides),a.value.forEach(o=>{o.type="next",o.id=v.value++}),a.value[0].type="active",_.value=setInterval(h,5e3)}),(o,m)=>(f(),p("section",{onClick:u,class:"advice-slider bg-black text-white"},[e("div",ne,[e("div",ce,[e("div",ie,[e("h2",oe,b(n.title),1),e("div",_e,[(f(!0),p(S,null,C(a.value,l=>(f(),p("div",{innerHTML:l.article,key:l.id,class:k(["advice-slider__content",{"advice-slider__content_active":l.type==="active","advice-slider__content_prev":l.type==="prev","advice-slider__content_next":l.type==="next"}])},null,10,ue))),128))])])]),(f(!0),p(S,null,C(a.value,l=>(f(),p("img",{key:l.id,src:`/images/advices/${l.imgSrc}`,class:k(["advice-slider__image",{"advice-slider__image_active":l.type==="active","advice-slider__image_prev":l.type==="prev","advice-slider__image_next":l.type==="next"}]),alt:"Постмодернизм"},null,10,de))),128))])]))}};export{fe as _,pe as a,$ as b};
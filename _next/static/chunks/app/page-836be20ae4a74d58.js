(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7511:function(e,t,a){Promise.resolve().then(a.bind(a,357))},357:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eg}});var n=a(7437),s=a(5883),l=a(2067),r=a.n(l);let o=(0,s.cn)({key:"date",default:r()()}),d=(0,s.cn)({key:"todoList",default:[{id:1,text:"레몬 향이 나고 부드러운 바디워시 사야 함",color:"cyan-900",finished:!1,start_date:"2024-01-17",end_date:"2024-01-17",is_all_day:!0},{id:2,text:"떡볶이 만들어 먹기",color:"cyan-800",finished:!1,start_date:"",end_date:"",is_all_day:!0}]}),i=function(e){let{className:t}=e,[a]=(0,s.FV)(o);return(0,n.jsx)("div",{className:"text-2xl font-bold px-4 py-2.5 rounded-xl bg-slate-500 ".concat(t),children:a.format("YYYY년 M월")})};var c=a(2265),u=a(7256),x=a(9213),f=a(7042),m=a(4769);function h(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,m.m6)((0,f.W)(t))}let g=(0,x.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=c.forwardRef((e,t)=>{let{className:a,variant:s,size:l,asChild:r=!1,...o}=e,d=r?u.g7:"button";return(0,n.jsx)(d,{className:h(g({variant:s,size:l,className:a})),ref:t,...o})});p.displayName="Button";var y=a(9172);let j=function(){let[e,t]=(0,s.FV)(o);return(0,n.jsx)(p,{className:"bg-white text-black border",onClick:()=>void t(e.clone().subtract(1,"month").startOf("month")),children:(0,n.jsx)("div",{children:(0,n.jsx)(y.x_l,{})})})},b=function(){let[,e]=(0,s.FV)(o);return(0,n.jsx)(p,{className:"bg-primary",onClick:()=>void e(r()()),children:"Today"})},v=function(e){let{icon:t,...a}=e;return(0,n.jsx)(p,{className:"text-black",variant:"outline",size:"icon",...a,children:c.createElement(t)})},N=function(){let[e,t]=(0,s.FV)(o);return(0,n.jsx)(v,{onClick:()=>void t(e.clone().add(1,"month").startOf("month")),icon:y.Z1Y})};var k=a(8409);let w=function(){return(0,n.jsx)(v,{onClick:()=>window.open("https://www.figma.com/file/XlemcYLRudGNtygVb89kBb/DAM-(%40shadcn%2Fui---Design-System)?type=design&node-id=110-1019&mode=design&t=ehOQ1RtkwTFImQzF-0"),icon:k.Tyb})},D=function(){return(0,n.jsx)(v,{onClick:()=>window.open("https://github.com/MackoLee/todo-calendar"),icon:k.XXB})},_=function(){return(0,n.jsx)(v,{icon:k.mdD})},F=function(){return(0,n.jsx)("div",{className:"bg-slate-600 border-2 border-slate-500 rounded-full",children:(0,n.jsx)("img",{className:"w-[30px] h-[30px] m-[6px]",src:"/todo-calendar/icons/dam.png",alt:"dam-icon"})})},V=function(){return(0,n.jsx)("div",{className:"h-[var(--header-height)]",children:(0,n.jsxs)("div",{className:"h-full flex flex-col mx-6",children:[(0,n.jsx)("div",{className:"h-4 w-full"}),(0,n.jsxs)("div",{className:"my-auto flex items-center gap-2",children:[(0,n.jsx)(i,{}),(0,n.jsx)(j,{}),(0,n.jsx)(b,{}),(0,n.jsx)(N,{}),(0,n.jsx)("div",{className:"flex-grow"}),(0,n.jsx)(w,{}),(0,n.jsx)(D,{}),(0,n.jsx)(_,{}),(0,n.jsx)(F,{})]})]})})};var Y=a(626);let B={BOX:"box"},O=function(){let[{canDrop:e},t]=(0,Y.L)(()=>({accept:B.BOX,drop:()=>({name:null}),collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})}));return(0,n.jsx)(p,{ref:t,size:"icon",variant:"outline",disabled:!e,className:"cursor-pointer",children:(0,n.jsx)(y.AMf,{className:"text-black ".concat(e?"animate-bounce":"")})})};var C=a(1951);let E=function(e){let{className:t="",value:a=!1}=e;return(0,n.jsx)("div",{className:"".concat(t),children:a?(0,n.jsx)(y.xik,{className:"text-white"}):(0,n.jsx)(y.hGI,{className:"text-white"})})},M="text-[22px] text-center",z=function(e){let{className:t="",value:a=!1,onClick:s=()=>null}=e;return(0,n.jsx)("div",{role:"checkbox","aria-checked":"false",tabIndex:0,className:"cursor-pointer ".concat(t),onClick:()=>s(!a),children:a?(0,n.jsx)(y.xik,{className:M}):(0,n.jsx)(y.u9M,{className:M})})},L=[{name:"cyan-900",color:"bg-cyan-900"},{name:"cyan-800",color:"bg-cyan-800"},{name:"cyan-700",color:"bg-cyan-700"},{name:"cyan-600",color:"bg-cyan-600"},{name:"cyan-500",color:"bg-cyan-500"}],R=[{name:"cyan-900",color:"text-cyan-900"},{name:"cyan-800",color:"text-cyan-800"},{name:"cyan-700",color:"text-cyan-700"},{name:"cyan-600",color:"text-cyan-600"},{name:"cyan-500",color:"text-cyan-500"}],I=function(e){let{selectedColor:t="cyan-700",onSelectedColorChange:a=()=>null}=e,s=(e,t)=>{e&&a(t)};return(0,n.jsx)("div",{className:"flex gap-1",children:R.map(e=>(0,n.jsx)(z,{value:e.name===t,className:e.color,onClick:t=>s(t,e.name)},e.name))})},S=function(e){var t;let{className:a="",options:s,onItemDropped:l=()=>null}=e,[{isDragging:o},d]=(0,C.c)(()=>({type:B.BOX,item:{options:s},options:{dropEffect:"cursor-grabbing"},end:(e,t)=>{let a=t.getDropResult();e&&a&&l(e.options,a.name)},collect:e=>({isDragging:e.isDragging(),handlerId:e.getHandlerId()})})),i=null===(t=L.find(e=>e.name===s.color))||void 0===t?void 0:t.color;return(0,n.jsx)("div",{ref:d,className:"w-full bg-[#004E6F] rounded-md p-3 cursor-grab active:cursor-grabbing ".concat(a," ").concat(o?"opacity-40":""," ").concat(i),"data-testid":"box",children:(0,n.jsxs)("div",{className:"flex gap-2 ",children:[(0,n.jsx)(E,{className:"my-auto",value:s.finished}),(0,n.jsxs)("div",{className:"gap-1",children:[(0,n.jsx)("p",{children:s.text}),s.start_date&&s.end_date&&(0,n.jsx)("p",{className:"text-gray-100 text-sm",children:r()(s.start_date).format("YYYY년 M월 D일")})]})]})})},A=function(){let e=(0,s.sJ)(d),t=(0,s._8)(e=>{let{snapshot:t,set:a}=e;return(e,n)=>{let s=t.getLoadable(d).getValue();a(d,s.map(t=>t.id===e.id?{...t,start_date:n,end_date:n}:t))}});return(0,n.jsx)("div",{className:"flex flex-col gap-3",children:e.map(e=>(0,n.jsx)(S,{options:e,onItemDropped:(e,a)=>t(e,a)},e.id))})},X=(0,s.cn)({key:"todoDialogIsOpen",default:!1}),T=(0,s.cn)({key:"todoDialogSelectedColor",default:"cyan-900"}),J=(0,s.cn)({key:"todoDialogMode",default:"add"}),H=(0,s.cn)({key:"todoDialogTaskText",default:""}),Z=function(){let[,e]=(0,s.FV)(X),[,t]=(0,s.FV)(J),[a,n]=(0,s.FV)(T),[l,r]=(0,s.FV)(H),[o,i]=(0,s.FV)(d);return{onOpen:a=>{let{mode:s="add",selectedColor:l="cyan-500",taskText:o=""}=a;t(s),n(l),r(o),e(!0)},addTodoList:()=>{i([...o,{id:o.reduce((e,t)=>Math.max(e,t.id),0)+1,color:a,text:l,finished:!1,start_date:"",end_date:"",is_all_day:!0}])}}},G=function(){let{onOpen:e}=Z();return(0,n.jsx)(v,{onClick:()=>e({}),icon:k.wEH})},Q=function(){return(0,n.jsxs)("div",{className:"w-full h-full rounded-xl drop-shadow-md bg-white p-[18px]",children:[(0,n.jsxs)("div",{className:"flex justify-between mb-[18px]",children:[(0,n.jsx)(G,{}),(0,n.jsx)(O,{})]}),(0,n.jsx)(A,{})]})},P=function(e){let{className:t="",name:a="Dustbin",children:s}=e,[{canDrop:l,isOver:r},o]=(0,Y.L)(()=>({accept:B.BOX,drop:()=>({name:a}),collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})})),d=(0,c.useMemo)(()=>"".concat("hover:bg-gray-200 "),[l&&r,l]);return(0,n.jsx)("div",{ref:o,className:"w-full h-full ".concat(d," ").concat(t),"data-testid":"dustbin",children:s})},W=(0,s.nZ)({key:"todoListByDate",get:e=>{let{get:t}=e,a=t(d),n={};return a.forEach(e=>{if(!e.start_date||""===e.start_date)return n;let t=r()(e.start_date).format("YYYY-MM-DD");Object.keys(n).includes(t)||(n[t]=[]),n[t].push(e)}),n}}),q=function(){let[e]=(0,s.FV)(o),t=e.year(),a=e.month()+1,n=e.date();return{startDay:(0,c.useMemo)(()=>r()([t,a-1,1]).startOf("week"),[t,a]),endDay:(0,c.useMemo)(()=>r()([t,a-1,1]).endOf("month").endOf("week"),[t,a]),year:t,month:a,day:n,todoListByDate:(0,s.sJ)(W)}},K=function(){let{startDay:e,endDay:t,year:a,month:s,day:l,todoListByDate:o}=q(),d=e=>{let t=e.month()===s-1;return 6===e.day()?t?"text-blue-400":"text-blue-400/50":0===e.day()?t?"text-red-400":"text-red-400/50":t?"text-gray-700":"text-gray-700/50"},i=e=>e.isSame(r()([a,s-1,l]),"day")?"":e.isSame(r()(),"day")?"bg-gray-300":"",c=e=>o[e.format("YYYY-MM-DD")]||[],u=e=>{var t;return null===(t=L.find(t=>t.name===e.color))||void 0===t?void 0:t.color};return(0,n.jsxs)("div",{className:"flex flex-col divide-y divide-[#BEBEBE] border border-[#BEBEBE] w-full h-full bg-white rounded-xl drop-shadow-md text-center",children:[(0,n.jsx)("div",{className:"flex divide-x divide-[#BEBEBE] font-bold",children:Array.from({length:7}).map((t,a)=>{let s=r()(e).add(7+a,"days");return(0,n.jsx)("div",{className:"flex-1 relative py-[4px]",children:(0,n.jsx)("span",{className:"inline-block ".concat(d(s)),children:s.locale("ko").format("ddd")})},s.toJSON())})}),Array.from({length:(t.diff(e,"days")+1)/7}).map((t,a)=>{let s=r()(e).add(7*a,"days");return(0,n.jsx)("div",{className:"flex grow divide-x divide-[#BEBEBE]",children:Array.from({length:7}).map((e,t)=>{let a=s.clone().add(t,"days");return(0,n.jsx)(P,{name:a.format("YYYY-MM-DD"),children:(0,n.jsxs)("div",{className:"flex-1 h-full relative py-2",children:[(0,n.jsx)("span",{className:"text-center inline-block leading-6 w-6 rounded-full ".concat(d(a)," ").concat(i(a)),children:a.format("D")}),(0,n.jsx)("div",{className:"text-black relative",children:(0,n.jsx)("div",{className:"absolute flex flex-col space-y-1 w-full",children:c(a).map(e=>(0,n.jsx)("div",{className:"text-white mx-1.5 rounded-md text-sm p-1 ".concat(u(e)),children:e.text},e.id))})})]})},a.toJSON())})},"week-".concat(s.toJSON()))})]})},U=function(){return(0,n.jsx)("div",{className:"h-full",children:(0,n.jsx)(K,{})})};var $=a(6476),ee=a(1936);let et=$.fC;$.xz;let ea=$.h_;$.x8;let en=c.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)($.aV,{ref:t,className:h("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s})});en.displayName=$.aV.displayName;let es=c.forwardRef((e,t)=>{let{className:a,children:s,...l}=e;return(0,n.jsxs)(ea,{children:[(0,n.jsx)(en,{}),(0,n.jsxs)($.VY,{ref:t,className:h("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l,children:[s,(0,n.jsxs)($.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(ee.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});function el(e){let{className:t,...a}=e;return(0,n.jsx)("div",{className:h("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})}function er(e){let{className:t,...a}=e;return(0,n.jsx)("div",{className:h("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})}es.displayName=$.VY.displayName,el.displayName="DialogHeader",er.displayName="DialogFooter";let eo=c.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)($.Dx,{ref:t,className:h("text-lg font-semibold leading-none tracking-tight",a),...s})});eo.displayName=$.Dx.displayName;let ed=c.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)($.dk,{ref:t,className:h("text-sm text-muted-foreground",a),...s})});ed.displayName=$.dk.displayName;var ei=a(6507);let ec=function(){let[e,t]=(0,s.FV)(T);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ed,{children:"색상을 입력해주세요."}),(0,n.jsx)(I,{selectedColor:e,onSelectedColorChange:e=>t(e)})]})},eu=c.forwardRef((e,t)=>{let{className:a,type:s,...l}=e;return(0,n.jsx)("input",{type:s,className:h("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...l})});eu.displayName="Input";let ex=function(){let[e,t]=(0,s.FV)(H);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ed,{children:"내용을 입력해주세요."}),(0,n.jsx)(eu,{className:"border-slate-200",type:"text",value:e,onChange:e=>t(e.target.value)})]})},ef=function(){let[e]=(0,s.FV)(J),[,t]=(0,s.FV)(X),[a]=(0,s.FV)(T),[l]=(0,s.FV)(H),{addTodoList:r}=Z(),o=()=>{alert("선택한 색상 : ".concat(a,"\n입력한 텍스트 : ").concat(l,"\n ").concat("edit"===e?"수정":"추가"," 완료!")),r(),t(!1)};return(0,n.jsx)(p,{className:"bg-sky-900 hover:bg-sky-900/80",type:"submit",onClick:()=>o(),children:"edit"===e?"수정":"추가"})},em=function(){let[,e]=(0,s.FV)(X),t=()=>{e(!1)};return(0,n.jsx)(p,{variant:"outline",onClick:()=>t(),children:"취소"})},eh=function(){let[e,t]=(0,s.FV)(X);return(0,n.jsx)(et,{open:e,onOpenChange:e=>t(e),children:(0,n.jsxs)(es,{children:[(0,n.jsx)(el,{children:(0,n.jsx)(eo,{children:"작업을 추가해주세요!"})}),(0,n.jsxs)(ei.DialogBody,{className:"flex flex-col gap-2",children:[(0,n.jsx)(ex,{}),(0,n.jsx)(ec,{})]}),(0,n.jsxs)(er,{children:[(0,n.jsx)(ef,{}),(0,n.jsx)(em,{})]})]})})};function eg(){return(0,n.jsxs)("main",{className:"h-screen w-screen",children:[(0,n.jsxs)("div",{className:"flex flex-col w-full h-full bg-[#A3C5CB] text-white",children:[(0,n.jsx)(V,{}),(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsxs)("div",{className:"flex h-full px-6 pb-6 gap-5",children:[(0,n.jsx)("div",{className:"basis-3/4",children:(0,n.jsx)(U,{})}),(0,n.jsx)("div",{className:"basis-1/4",children:(0,n.jsx)(Q,{})})]})})]}),(0,n.jsx)(eh,{})]})}}},function(e){e.O(0,[691,240,699,990,678,971,938,744],function(){return e(e.s=7511)}),_N_E=e.O()}]);
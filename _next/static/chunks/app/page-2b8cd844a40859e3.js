(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7511:function(e,t,a){Promise.resolve().then(a.bind(a,1782))},1782:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ed}});var n=a(7437),s=a(5883),r=a(2067),l=a.n(r);let o=(0,s.cn)({key:"date",default:l()()}),c=(0,s.cn)({key:"todoList",default:[{id:1,text:"레몬 향이 나고 부드러운 바디워시 사야 함",color:"cyan-900",finished:!1},{id:2,text:"떡볶이 만들어 먹기",color:"cyan-900",finished:!1}]}),i=function(e){let{className:t}=e,[a]=(0,s.FV)(o);return(0,n.jsx)("div",{className:"text-2xl font-bold ".concat(t),children:a.format("YYYY년 M월")})};var d=a(2265),u=a(7256),f=a(9213),x=a(7042),m=a(4769);function h(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,m.m6)((0,x.W)(t))}let g=(0,f.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=d.forwardRef((e,t)=>{let{className:a,variant:s,size:r,asChild:l=!1,...o}=e,c=l?u.g7:"button";return(0,n.jsx)(c,{className:h(g({variant:s,size:r,className:a})),ref:t,...o})});p.displayName="Button";var y=a(9172);let b=function(){let[e,t]=(0,s.FV)(o);return(0,n.jsx)(p,{className:"bg-white text-black border",onClick:()=>void t(e.clone().subtract(1,"month").startOf("month")),children:(0,n.jsx)("div",{children:(0,n.jsx)(y.x_l,{})})})},v=function(){let[,e]=(0,s.FV)(o);return(0,n.jsx)(p,{className:"bg-primary",onClick:()=>void e(l()()),children:"Today"})},j=function(e){let{icon:t,...a}=e;return(0,n.jsx)(p,{className:"text-black",variant:"outline",size:"icon",...a,children:d.createElement(t)})},N=function(){let[e,t]=(0,s.FV)(o);return(0,n.jsx)(j,{onClick:()=>void t(e.clone().add(1,"month").startOf("month")),icon:y.Z1Y})},k=function(){return(0,n.jsx)("div",{className:"h-[var(--header-height)]",children:(0,n.jsxs)("div",{className:"h-full flex flex-col mx-6",children:[(0,n.jsx)("div",{className:"h-4 w-full"}),(0,n.jsxs)("div",{className:"my-auto flex gap-2",children:[(0,n.jsx)(i,{className:"my-auto"}),(0,n.jsx)(b,{}),(0,n.jsx)(v,{}),(0,n.jsx)(N,{})]})]})})};var w=a(626);let V={BOX:"box"},F=function(){let[{canDrop:e},t]=(0,w.L)(()=>({accept:V.BOX,drop:()=>({name:"Trash"}),collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})}));return(0,n.jsx)(p,{ref:t,size:"icon",variant:"outline",disabled:!e,className:"cursor-pointer",children:(0,n.jsx)(y.AMf,{className:"text-black ".concat(e?"animate-bounce":"")})})};var O=a(1951);let C=function(e){let{className:t="",value:a=!1}=e;return(0,n.jsx)("div",{className:"".concat(t),children:a?(0,n.jsx)(y.xik,{className:"text-white"}):(0,n.jsx)(y.hGI,{className:"text-white"})})},D="text-[22px] text-center",B=function(e){let{className:t="",value:a=!1,onClick:s=()=>null}=e;return(0,n.jsx)("div",{role:"checkbox","aria-checked":"false",tabIndex:0,className:"cursor-pointer ".concat(t),onClick:()=>s(!a),children:a?(0,n.jsx)(y.xik,{className:D}):(0,n.jsx)(y.u9M,{className:D})})},E=[{name:"cyan-900",color:"bg-cyan-900"},{name:"cyan-800",color:"bg-cyan-800"},{name:"cyan-700",color:"bg-cyan-700"},{name:"cyan-600",color:"bg-cyan-600"},{name:"cyan-500",color:"bg-cyan-500"}],Y=[{name:"cyan-900",color:"text-cyan-900"},{name:"cyan-800",color:"text-cyan-800"},{name:"cyan-700",color:"text-cyan-700"},{name:"cyan-600",color:"text-cyan-600"},{name:"cyan-500",color:"text-cyan-500"}],M=function(e){let{selectedColor:t="cyan-700",onSelectedColorChange:a=()=>null}=e,s=(e,t)=>{e&&a(t)};return(0,n.jsx)("div",{className:"flex gap-1",children:Y.map(e=>(0,n.jsx)(B,{value:e.name===t,className:e.color,onClick:t=>s(t,e.name)},e.name))})},z=function(e){var t;let{className:a="",options:s}=e,[{isDragging:r},l]=(0,O.c)(()=>({type:V.BOX,item:{options:s},options:{dropEffect:"cursor-grabbing"},end:(e,t)=>{let a=t.getDropResult();e&&a&&alert("You dropped ".concat(JSON.stringify(e.options.text)," into ").concat(a.name,"!"))},collect:e=>({isDragging:e.isDragging(),handlerId:e.getHandlerId()})})),o=null===(t=E.find(e=>e.name===s.color))||void 0===t?void 0:t.color;return(0,n.jsxs)("div",{ref:l,className:"w-full bg-[#004E6F] rounded-md p-3 flex gap-2 cursor-grab active:cursor-grabbing ".concat(a," ").concat(r?"opacity-40":""," ").concat(o),"data-testid":"box",children:[(0,n.jsx)(C,{className:"my-auto",value:s.finished}),s.text]})},S=function(){let[e]=(0,s.FV)(c);return(0,n.jsx)("div",{className:"flex flex-col gap-3",children:e.map(e=>(0,n.jsx)(z,{options:e},e.id))})};var _=a(8409);let A=(0,s.cn)({key:"todoDialogIsOpen",default:!1}),R=(0,s.cn)({key:"todoDialogSelectedColor",default:"cyan-900"}),I=(0,s.cn)({key:"todoDialogMode",default:"add"}),T=(0,s.cn)({key:"todoDialogTaskText",default:""}),J=function(){let[,e]=(0,s.FV)(A),[,t]=(0,s.FV)(I),[a,n]=(0,s.FV)(R),[r,l]=(0,s.FV)(T),[o,i]=(0,s.FV)(c);return{onOpen:a=>{let{mode:s="add",selectedColor:r="cyan-500",taskText:o=""}=a;t(s),n(r),l(o),e(!0)},AddTodoList:()=>{i([...o,{id:o.reduce((e,t)=>Math.max(e,t.id),0)+1,color:a,text:r,finished:!1}])}}},L=function(){let{onOpen:e}=J();return(0,n.jsx)(j,{onClick:()=>e({}),icon:_.wEH})},X=function(){return(0,n.jsxs)("div",{className:"w-full h-full rounded-xl drop-shadow-md bg-white p-[18px]",children:[(0,n.jsxs)("div",{className:"flex justify-between mb-[18px]",children:[(0,n.jsx)(L,{}),(0,n.jsx)(F,{})]}),(0,n.jsx)(S,{})]})},H=function(e){let{className:t="",name:a="Dustbin",children:s}=e,[{canDrop:r,isOver:l},o]=(0,w.L)(()=>({accept:V.BOX,drop:()=>({name:a}),collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})})),c=(0,d.useMemo)(()=>"".concat("hover:bg-gray-200 "),[r&&l,r]);return(0,n.jsx)("div",{ref:o,className:"w-full h-full ".concat(c," ").concat(t),"data-testid":"dustbin",children:s})},Z=function(){let[e]=(0,s.FV)(o),t=e.year(),a=e.month()+1,r=e.date(),c=(0,d.useMemo)(()=>l()([t,a-1,1]).startOf("week"),[t,a]),i=(0,d.useMemo)(()=>l()([t,a-1,1]).endOf("month").endOf("week"),[t,a]),u=e=>{let t=e.month()===a-1;return 6===e.day()?t?"text-blue-400":"text-blue-400/50":0===e.day()?t?"text-red-400":"text-red-400/50":t?"text-gray-700":"text-gray-700/50"},f=e=>e.isSame(l()([t,a-1,r]),"day")?"bg-red-100":e.isSame(l()(),"day")?"bg-gray-300":"";return(0,n.jsxs)("div",{className:"flex flex-col divide-y divide-[#BEBEBE] border border-[#BEBEBE] w-full h-full bg-white rounded-xl drop-shadow-md text-center",children:[(0,n.jsx)("div",{className:"flex divide-x divide-[#BEBEBE] font-bold",children:Array.from({length:7}).map((e,t)=>{let a=l()(c).add(7+t,"days");return(0,n.jsx)("div",{className:"flex-1 relative py-[4px]",children:(0,n.jsx)("span",{className:"inline-block ".concat(u(a)),children:a.locale("ko").format("ddd")})},a.toJSON())})}),Array.from({length:(i.diff(c,"days")+1)/7}).map((e,t)=>{let a=l()(c).add(7*t,"days");return(0,n.jsx)("div",{className:"flex grow divide-x divide-[#BEBEBE]",children:Array.from({length:7}).map((e,t)=>{let s=a.clone().add(t,"days");return(0,n.jsx)(H,{name:s.format("YYYY-MM-DD"),children:(0,n.jsx)("div",{className:"flex-1 h-full relative py-2",children:(0,n.jsx)("span",{className:"text-center inline-block leading-6 w-6 rounded-full ".concat(u(s)," ").concat(f(s)),children:s.format("D")})})},s.toJSON())})},"week-".concat(a.toJSON()))})]})},G=function(){return(0,n.jsx)("div",{className:"h-full",children:(0,n.jsx)(Z,{})})};var P=a(6476),W=a(1936);let q=P.fC;P.xz;let K=P.h_;P.x8;let Q=d.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(P.aV,{ref:t,className:h("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s})});Q.displayName=P.aV.displayName;let U=d.forwardRef((e,t)=>{let{className:a,children:s,...r}=e;return(0,n.jsxs)(K,{children:[(0,n.jsx)(Q,{}),(0,n.jsxs)(P.VY,{ref:t,className:h("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...r,children:[s,(0,n.jsxs)(P.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(W.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});function $(e){let{className:t,...a}=e;return(0,n.jsx)("div",{className:h("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})}function ee(e){let{className:t,...a}=e;return(0,n.jsx)("div",{className:h("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})}U.displayName=P.VY.displayName,$.displayName="DialogHeader",ee.displayName="DialogFooter";let et=d.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(P.Dx,{ref:t,className:h("text-lg font-semibold leading-none tracking-tight",a),...s})});et.displayName=P.Dx.displayName;let ea=d.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(P.dk,{ref:t,className:h("text-sm text-muted-foreground",a),...s})});ea.displayName=P.dk.displayName;var en=a(6507);let es=function(){let[e,t]=(0,s.FV)(R);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ea,{children:"색상을 입력해주세요."}),(0,n.jsx)(M,{selectedColor:e,onSelectedColorChange:e=>t(e)})]})},er=d.forwardRef((e,t)=>{let{className:a,type:s,...r}=e;return(0,n.jsx)("input",{type:s,className:h("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...r})});er.displayName="Input";let el=function(){let[e,t]=(0,s.FV)(T);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ea,{children:"내용을 입력해주세요."}),(0,n.jsx)(er,{className:"border-slate-200",type:"text",value:e,onChange:e=>t(e.target.value)})]})},eo=function(){let[e]=(0,s.FV)(I),[,t]=(0,s.FV)(A),[a]=(0,s.FV)(R),[r]=(0,s.FV)(T),{AddTodoList:l}=J(),o=()=>{alert("선택한 색상 : ".concat(a,"\n입력한 텍스트 : ").concat(r,"\n ").concat("edit"===e?"수정":"추가"," 완료!")),l(),t(!1)};return(0,n.jsx)(p,{className:"bg-sky-900 hover:bg-sky-900/80",type:"submit",onClick:()=>o(),children:"edit"===e?"수정":"추가"})},ec=function(){let[,e]=(0,s.FV)(A),t=()=>{e(!1)};return(0,n.jsx)(p,{variant:"outline",onClick:()=>t(),children:"취소"})},ei=function(){let[e,t]=(0,s.FV)(A);return(0,n.jsx)(q,{open:e,onOpenChange:e=>t(e),children:(0,n.jsxs)(U,{children:[(0,n.jsx)($,{children:(0,n.jsx)(et,{children:"작업을 추가해주세요!"})}),(0,n.jsxs)(en.DialogBody,{className:"flex flex-col gap-2",children:[(0,n.jsx)(el,{}),(0,n.jsx)(es,{})]}),(0,n.jsxs)(ee,{children:[(0,n.jsx)(eo,{}),(0,n.jsx)(ec,{})]})]})})};function ed(){return(0,n.jsxs)("main",{className:"h-screen w-screen",children:[(0,n.jsxs)("div",{className:"flex flex-col w-full h-full bg-[#A3C5CB] text-white",children:[(0,n.jsx)(k,{}),(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsxs)("div",{className:"flex h-full px-6 pb-6 gap-5",children:[(0,n.jsx)("div",{className:"basis-3/4",children:(0,n.jsx)(G,{})}),(0,n.jsx)("div",{className:"basis-1/4",children:(0,n.jsx)(X,{})})]})})]}),(0,n.jsx)(ei,{})]})}}},function(e){e.O(0,[691,240,699,990,678,971,938,744],function(){return e(e.s=7511)}),_N_E=e.O()}]);
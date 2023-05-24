import{n,u as o,j as t}from"./index-4346da45.js";import{B as s}from"./ListTweets.styled-c7ac1ca8.js";const r=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${e=>e.theme.colors.dark};
`,i=n.b`
  font-size: 64px;
`,c=n.p`
  font-size: 30px;
`,a=()=>{const e=o();return t.jsxs(r,{children:[t.jsx(i,{children:"404"}),t.jsx(c,{children:"Sorry, we couldn`t fins this page :("}),t.jsx(s,{type:"button",onClick:()=>e("/"),children:"Go to HOME"})]})},d=()=>t.jsx("main",{children:t.jsx(a,{})});export{d as NotFound,d as default};

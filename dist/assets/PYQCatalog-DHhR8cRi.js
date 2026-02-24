import{c as s,j as e,L as a}from"./index-Dd61iRMM.js";import{p as i}from"./pyqs-Do821bjE.js";import{B as l}from"./book-open-D0tLv-rO.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=s("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=s("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=s("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),d={"Teaching Aptitude":e.jsx(l,{size:32}),"Research Aptitude":e.jsx(r,{size:32}),Communication:e.jsx(o,{size:32}),ICT:e.jsx(c,{size:32})},h=()=>{const n=Object.keys(i);return e.jsxs("div",{className:"container section animate-fade-in",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[e.jsxs("h1",{className:"section-title",children:["Section-wise ",e.jsx("span",{className:"gradient-text",children:"PYQ Solver"})]}),e.jsx("p",{style:{maxWidth:"600px",margin:"0 auto",color:"var(--text-muted)"},children:"Select a unit to start practicing Previous Year Questions. Master each section strategically for the UGC-NET exam."})]}),e.jsx("div",{className:"grid",children:n.map(t=>e.jsxs("div",{className:"card glass",style:{padding:"2rem",display:"flex",flexDirection:"column",transition:"all 0.3s"},children:[e.jsx("div",{style:{background:"rgba(99, 102, 241, 0.1)",width:"64px",height:"64px",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)",marginBottom:"1.5rem"},children:d[t]||e.jsx(r,{size:32})}),e.jsx("h3",{style:{marginBottom:"0.5rem"},children:t}),e.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"2rem",flexGrow:1},children:["Practice ",i[t].length," essential questions from previous years."]}),e.jsxs("div",{style:{display:"flex",gap:"0.75rem"},children:[e.jsx(a,{to:`/quiz-player?section=${t}&mode=practice`,className:"btn btn-secondary",style:{padding:"0.6rem 1rem",fontSize:"0.85rem",flex:1},children:"Practice"}),e.jsx(a,{to:`/quiz-player?section=${t}&mode=mock`,className:"btn btn-primary",style:{padding:"0.6rem 1rem",fontSize:"0.85rem",flex:1},children:"Mock Test"})]})]},t))})]})};export{h as default};

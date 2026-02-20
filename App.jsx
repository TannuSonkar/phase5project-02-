// import React, { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [lang, setLang] = useState("EN");

//   return (
//     <div className="app-root">
//       <nav className="nav">
//         <div className="left">
//           <div className="logo">PHA5E</div>
//           <div className="menu">
//             <a href="#">Our vision</a>
//             <a href="#projects">Projects</a>
//             <a href="#team">Our team</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </div>
//         <div className="right">
//           <button className="lang" onClick={() => setLang(lang === "EN" ? "FR" : "EN")}>
//             {lang}
//           </button>
//         </div>
//       </nav>

//       <main>
//         <section className="hero">
//           <div className="hero-left">
//             <div className="eyebrow">GLOBAL DIGITAL STUDIO</div>
//             <h1>Creating digital emotions through design, science and code.</h1>
//             <p className="lead">
//               We are an experiential studio mixing neuroscience, creative
//               technology and web craft to design immersive digital experiences —
//               interactive installations, WebGL projects and bold web identities.
//             </p>
//             <a className="cta" href="#projects">
//               Our projects →
//             </a>
//           </div>

//           <aside className="projects">
//             <h3>Featured projects</h3>
//             <div className="proj-list">
//               {["Mars—eille", "Fanz—one36", "Tribute to Steamboat"].map((p) => (
//                 <div className="proj" key={p}>
//                   <div className="thumb"></div>
//                   <div className="proj-info">
//                     <div className="title">{p}</div>
//                     <div className="meta">WebGL demo project</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </aside>
//         </section>

//         <section id="projects" className="grid">
//           <article className="card">
//             <h4>Olive</h4>
//             <p>Interactive installation / real-time visualisation</p>
//           </article>
//           <article className="card">
//             <h4>Unganisha</h4>
//             <p>WebGL experience blending 3D and data</p>
//           </article>
//           <article className="card">
//             <h4>Mucem Experiential</h4>
//             <p>Exhibition design and touchscreen interactions</p>
//           </article>
//         </section>
//       </main>

//       <footer>
//         <div>Studio PHA5E — digital experiences. Contact: contact@pha5e.com</div>
//       </footer>
//     </div>
//   );
// }

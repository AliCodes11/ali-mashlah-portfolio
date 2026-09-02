import { ArrowDown, ArrowRight, ArrowUpRight, Box, Braces, Layers3, Smartphone } from 'lucide-react';
import { ProjectGallery } from '@/components/project-gallery';

const capabilities = [
  {
    icon: Layers3,
    number: '01',
    title: 'Commerce systems with more than one kind of user',
    text: 'Customer storefronts, vendor workspaces, administration, inventory and ordering—connected through one backend.',
    proof: ['Pocket Shop', 'Lafah'],
    href: '/work/pocket-shop',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Web and mobile clients that share real application logic',
    text: 'React and Flutter interfaces consuming Laravel APIs, with authentication, structured data and role-aware workflows.',
    proof: ['Pocket Shop', 'Apartment Booking'],
    href: '/work/apartment-booking',
  },
  {
    icon: Box,
    number: '03',
    title: 'Graphics work that goes beyond a flat interface',
    text: 'Interactive motion in the browser and native 3D environments built with Three.js, WebGL, C++ and OpenGL.',
    proof: ['Newton’s Cradle', 'Car Dealership'],
    href: '/work/newtons-cradle',
  },
  {
    icon: Braces,
    number: '04',
    title: 'Software structure for operational desktop tools',
    text: 'Object-oriented models, background work, file persistence and interfaces for everyday business processes.',
    proof: ['Production & Inventory'],
    href: '/work/inventory-management',
  },
];

export default function Home() {
  return <main id="top">
    <a className="skip-link" href="#work">Skip to selected work</a>
    <header className="site-header wrap">
      <a className="wordmark" href="#top" aria-label="Ali Mashlah home">Ali<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#story">About Ali</a></nav>
      <a className="header-contact" href="mailto:alimashlah70@gmail.com">Tell me your idea <ArrowUpRight size={16}/></a>
    </header>

    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> ALI MASHLAH · SOFTWARE DEVELOPER</div>
        <h1>I build the screen people see—<br/><em>and the system that makes it work.</em></h1>
        <p className="hero-description">I move between web, mobile, backend logic and interactive graphics. What interests me most is connecting the whole experience, from a person’s first click to the data and rules behind it.</p>
        <blockquote className="human-note">“I like projects with users, data, and a few moving parts to connect.”</blockquote>
        <div className="hero-actions"><a className="primary-link" href="#work">See what I’ve built <ArrowDown size={17}/></a><a className="text-link" href="mailto:alimashlah70@gmail.com">Start a conversation <ArrowUpRight size={17}/></a></div>
      </div>
      <figure className="portrait portrait-human"><img src="/images/ali-mashlah.jpg" alt="Ali Mashlah" fetchPriority="high"/><figcaption><span>Hi, I’m Ali.<small>I turn product ideas into working software.</small></span><ArrowUpRight size={24}/></figcaption><div className="portrait-sticker">WEB<br/>MOBILE<br/>3D</div></figure>
    </section>

    <div className="discipline-strip"><div className="wrap"><span>React + Laravel</span><i>→</i><span>Flutter</span><i>→</i><span>Three.js + OpenGL</span><i>→</i><span>Java desktop</span></div></div>

    <section className="work-section wrap" id="work">
      <div className="section-heading"><div><span className="eyebrow">01 / THE WORK</span><h2>See what I can<br/><em>actually build.</em></h2></div><p>Every project opens into the problem, the system behind it,<br/>and the part a visitor can inspect or try.</p></div>
      <ProjectGallery/>
    </section>

    <section className="capability-section wrap" id="capabilities">
      <div className="capability-heading"><span className="eyebrow">02 / CAPABILITIES, WITH EVIDENCE</span><h2>My range makes more sense<br/>when you follow the projects.</h2><p>I’m comfortable crossing boundaries between interface work, backend behavior, business workflows and graphics. These are the projects that prove each part.</p></div>
      <div className="capability-grid">{capabilities.map(item => <a className="capability-card" href={item.href} key={item.number}><span className="capability-number">{item.number}</span><item.icon strokeWidth={1.25}/><h3>{item.title}</h3><p>{item.text}</p><div>{item.proof.map(label => <span key={label}>{label}</span>)}</div><strong>See the evidence <ArrowRight size={16}/></strong></a>)}</div>
    </section>

    <section className="story-section wrap" id="story">
      <div><span className="eyebrow">03 / HOW I WORK</span><h2>I’m curious about the<br/><em>whole product.</em></h2></div>
      <div className="story-copy"><p>I don’t see a storefront as a collection of screens. I see the catalog it needs, the API that serves it, the order states an administrator must manage, and the small decisions that make the experience understandable.</p><p>That same curiosity takes me into graphics programming. Building a 3D scene or a motion experiment teaches a different kind of precision: position, time, input and feedback all have to agree.</p><p>Several projects here are collaborative or academic work. I name that clearly, show the source when it is available, and describe the decisions without pretending they produced commercial results.</p></div>
      <div className="working-notes"><article><span>Start with the job</span><p>What must a customer, vendor or administrator be able to finish?</p></article><article><span>Connect every layer</span><p>Interface, API, data and state should tell the same story.</p></article><article><span>Keep it honest</span><p>Real captures, working interactions and clear limits build trust.</p></article></div>
    </section>

    <section className="contact-section wrap" id="contact"><span className="eyebrow">HAVE SOMETHING TO BUILD?</span><h2>Tell me what needs<br/><em>to exist.</em></h2><p>A marketplace, an internal workflow, a mobile product, or an interactive 3D idea—I’d like to hear the problem first.</p><a className="email-link" href="mailto:alimashlah70@gmail.com">alimashlah70@gmail.com <ArrowUpRight/></a><a className="phone-link" href="tel:+963985055923">+963 985 055 923</a></section>
    <footer className="wrap site-footer"><span>© {new Date().getFullYear()} Ali Mashlah</span><span>Web · Mobile · Backend · Graphics</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}

import { ArrowDown, ArrowRight, ArrowUpRight, Box, Braces, Database, Laptop, Smartphone } from 'lucide-react';
import { ProjectGallery } from '@/components/project-gallery';

const capabilities = [
  {
    icon: Braces,
    number: '01',
    title: 'Frontend & product interfaces',
    text: 'I turn workflows into responsive interfaces that remain clear across customer, vendor, and administration roles.',
    skills: ['React', 'Routing', 'Responsive UI', 'Auth flows', 'Component systems'],
    proof: ['Pocket Shop', 'Lafah'],
    href: '/work/pocket-shop',
  },
  {
    icon: Database,
    number: '02',
    title: 'Backend & data',
    text: 'I connect interfaces to Laravel APIs and MySQL models for accounts, catalogs, inventory, orders, coupons, and permissions.',
    skills: ['Laravel', 'REST APIs', 'MySQL', 'Validation', 'Role access'],
    proof: ['Pocket Shop', 'Lafah'],
    href: '/work/pocket-shop',
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Mobile applications',
    text: 'I build Flutter clients that share backend behavior with the web while keeping navigation, media, and role-specific tasks native to mobile.',
    skills: ['Flutter', 'Dart', 'API clients', 'Media handling', 'Mobile UX'],
    proof: ['Pocket Shop', 'Apartment Booking'],
    href: '/work/pocket-shop',
  },
  {
    icon: Box,
    number: '04',
    title: 'Interactive graphics & 3D',
    text: 'I work with scene graphs, camera control, pointer input, animation loops, lighting, geometry, and simplified physics.',
    skills: ['Three.js', 'WebGL', 'OpenGL', 'C++', 'Animation'],
    proof: ['Newton’s Cradle', 'Car Dealership'],
    href: '/work/newtons-cradle',
  },
  {
    icon: Laptop,
    number: '05',
    title: 'Desktop software foundations',
    text: 'I use object-oriented structure, file persistence, exceptions, and background work to organize operational tools.',
    skills: ['Java', 'Swing', 'OOP', 'File I/O', 'Threads'],
    proof: ['Production & Inventory'],
    href: '/work/inventory-management',
  },
];

export default function Home() {
  return <main id="top">
    <a className="skip-link" href="#work">Skip to selected work</a>
    <header className="site-header wrap">
      <a className="wordmark" href="#top" aria-label="Ali Mashlah home">Ali<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#capabilities">Skills</a><a href="#work">Work</a><a href="#story">About Ali</a></nav>
      <a className="header-contact" href="mailto:alimashlah70@gmail.com">Tell me your idea <ArrowUpRight size={16}/></a>
    </header>

    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> SOFTWARE DEVELOPER · WEB / MOBILE / GRAPHICS</div>
        <h1><span className="hero-display-name">Ali Mashlah</span>I design interfaces, wire up APIs, and build <em>interactive worlds.</em></h1>
        <p className="hero-description">My range is the point. I can follow a product from its React interface through Laravel and MySQL, carry the same system into Flutter, and switch context into Three.js, OpenGL, or desktop software when the idea needs it.</p>
        <p className="human-note">I’m most interested in the places where different parts of software have to agree: people, screens, rules, data, and motion.</p>
        <div className="hero-actions"><a className="primary-link" href="#work">See what I’ve built <ArrowDown size={17}/></a><a className="text-link" href="mailto:alimashlah70@gmail.com">Start a conversation <ArrowUpRight size={17}/></a></div>
      </div>
      <figure className="portrait portrait-human"><img src="/images/ali-mashlah-profile-2026.jpg" alt="Ali Mashlah" fetchPriority="high"/><figcaption><span>Hi, I’m Ali.<small>I turn product ideas into working software.</small></span><ArrowUpRight size={24}/></figcaption><div className="portrait-sticker">WEB<br/>MOBILE<br/>3D</div></figure>
    </section>

    <div className="discipline-strip"><div className="wrap"><span>React + Laravel</span><i>→</i><span>Flutter</span><i>→</i><span>Three.js + OpenGL</span><i>→</i><span>Java desktop</span></div></div>

    <section className="capability-section wrap" id="capabilities">
      <div className="capability-heading"><span className="eyebrow">01 / MY WORKING TOOLKIT</span><h2>What I know,<br/><em>and where I use it.</em></h2><p>These are concrete skills I can explain in code and connect to a project. Open any card to see the evidence rather than a proficiency score.</p></div>
      <div className="capability-grid">{capabilities.map(item => <a className="capability-card" href={item.href} key={item.number}><span className="capability-number">{item.number}</span><item.icon strokeWidth={1.25}/><h3>{item.title}</h3><p>{item.text}</p><ul>{item.skills.map(skill => <li key={skill}>{skill}</li>)}</ul><div>{item.proof.map(label => <span key={label}>{label}</span>)}</div><strong>See the project proof <ArrowRight size={16}/></strong></a>)}</div>
    </section>

    <section className="work-section wrap" id="work">
      <div className="section-heading"><div><span className="eyebrow">02 / SELECTED WORK</span><h2>Systems, screens,<br/><em>and 3D experiments.</em></h2></div><p>Every project opens into the problem, the architecture,<br/>and the part a visitor can inspect or try.</p></div>
      <ProjectGallery/>
    </section>

    <section className="story-section wrap" id="story">
      <div><span className="eyebrow">03 / THE PERSON IN THE WORK</span><h2>I’m curious about the<br/><em>whole product.</em></h2></div>
      <div className="story-copy"><p>I don’t see a storefront as a collection of screens. I see the catalog it needs, the API that serves it, the order states an administrator must manage, and the small decisions that make the experience understandable.</p><p>That same curiosity takes me into graphics programming. Building a 3D scene or a motion experiment teaches a different kind of precision: position, time, input and feedback all have to agree.</p><p>Several projects here are collaborative or academic work. I name that clearly, show the source when it is available, and describe the decisions without pretending they produced commercial results.</p></div>
      <div className="working-notes"><article><span>Start with the job</span><p>What must a customer, vendor or administrator be able to finish?</p></article><article><span>Connect every layer</span><p>Interface, API, data and state should tell the same story.</p></article><article><span>Keep it honest</span><p>Real captures, working interactions and clear limits build trust.</p></article></div>
    </section>

    <section className="contact-section wrap" id="contact"><span className="eyebrow">HAVE SOMETHING TO BUILD?</span><h2>Tell me what needs<br/><em>to exist.</em></h2><p>A marketplace, an internal workflow, a mobile product, or an interactive 3D idea—I’d like to hear the problem first.</p><a className="email-link" href="mailto:alimashlah70@gmail.com">alimashlah70@gmail.com <ArrowUpRight/></a><a className="phone-link" href="tel:+963985055923">+963 985 055 923</a></section>
    <footer className="wrap site-footer"><span>© {new Date().getFullYear()} Ali Mashlah</span><span>Web · Mobile · Backend · Graphics</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}

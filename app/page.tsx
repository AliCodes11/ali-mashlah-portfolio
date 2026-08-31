import { ArrowDown, ArrowUpRight, Code2, MoveUpRight } from 'lucide-react';
import { ProjectGallery } from '@/components/project-gallery';

export default function Home() {
  return <main id="top">
    <a className="skip-link" href="#work">Skip to selected work</a>
    <header className="site-header wrap">
      <a className="wordmark" href="#top" aria-label="Ali Mashlah home">am<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="header-contact" href="mailto:alimashlah70@gmail.com">Let’s talk <ArrowUpRight size={16}/></a>
    </header>
    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> WEB · MOBILE · INTERACTIVE GRAPHICS</div>
        <h1><span className="hero-name">I’m Ali Mashlah.</span>Software with purpose.<br/><em>Graphics with depth.</em></h1>
        <p className="hero-description">I build connected web and mobile applications—and bring a different dimension to the screen through interactive 3D.</p>
        <div className="hero-actions"><a className="primary-link" href="#work">Explore my work <ArrowDown size={17}/></a><a className="text-link" href="mailto:alimashlah70@gmail.com">Have a project in mind? <ArrowUpRight size={17}/></a></div>
        <div className="hero-footnote"><Code2 size={16}/><span>From the first interface to the logic behind it.</span></div>
      </div>
      <figure className="portrait"><img src="/images/ali-mashlah.jpg" alt="Ali Mashlah" fetchPriority="high"/><figcaption><span>Ali Mashlah<small>Software developer</small></span><MoveUpRight size={24}/></figcaption></figure>
    </section>
    <div className="discipline-strip"><div className="wrap"><span>React & Laravel</span><i>✳</i><span>Flutter & mobile</span><i>✳</i><span>Three.js & OpenGL</span><i>✳</i><span>Ideas into interaction</span></div></div>
    <section className="work-section wrap" id="work"><div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Different challenges.<br/>One curious mind.</h2></div><p>Connected applications and interactive worlds.<br/>Explore the work behind the interface.</p></div>
      <ProjectGallery/>
    </section>
    <section className="about-section wrap" id="about"><div><span className="eyebrow">02 / THE PERSON BEHIND THE WORK</span><h2>Practical thinking.<br/><em>A creative streak.</em></h2><p>My work connects interfaces, APIs, and data. Alongside web and mobile development, I work with graphics programming to explore movement, interaction, and the way people experience software.</p><p>I’m interested in the whole journey: what someone needs to do, how the interface helps them do it, and what has to happen behind the scenes.</p></div><div className="capabilities"><h3>What I can help you build</h3><div><span>01</span><section><h4>Web applications & marketplaces</h4><p>Customer experiences, administration tools, catalogs, and connected business workflows.</p></section></div><div><span>02</span><section><h4>Mobile apps & backend integration</h4><p>Flutter interfaces connected to Laravel APIs, shared accounts, and structured data.</p></section></div><div><span>03</span><section><h4>Interactive graphics & 3D</h4><p>Browser-based experiences, scene interaction, and graphics programming with Three.js and OpenGL.</p></section></div></div></section>
    <section className="contact-section wrap" id="contact"><span className="eyebrow">LET’S BUILD SOMETHING</span><h2>Your next idea.<br/><em>Let’s make it work.</em></h2><a className="email-link" href="mailto:alimashlah70@gmail.com">alimashlah70@gmail.com <ArrowUpRight/></a><a className="phone-link" href="tel:+963985055923">+963 985 055 923</a></section>
    <footer className="wrap site-footer"><span>© {new Date().getFullYear()} Ali Mashlah</span><span>Software & Interactive Graphics</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}

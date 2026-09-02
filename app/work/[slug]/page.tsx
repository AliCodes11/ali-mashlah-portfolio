import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '@/lib/projects';
import { ProjectCover } from '@/components/project-cover';
import { CradleExperience } from '@/components/cradle-experience';
import { PocketShowcase } from '@/components/pocket-showcase';

export function generateStaticParams() { return projects.map(project => ({slug: project.slug})); }
export async function generateMetadata({params}: {params: Promise<{slug:string}>}): Promise<Metadata> {
  const {slug} = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return { title: 'Project not found — Ali Mashlah' };
  return {title:`${project.title} — Ali Mashlah`,description:project.summary,openGraph:{title:`${project.title} — Ali Mashlah`,description:project.summary,images:project.image ? [{url:project.image,alt:project.title}] : []},twitter:{card:project.image?'summary_large_image':'summary',title:`${project.title} — Ali Mashlah`,description:project.summary,images:project.image?[project.image]:[]}};
}
export default async function ProjectPage({params}: {params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project)+1)%projects.length];
  return <main id="top"><header className="site-header wrap"><a className="wordmark" href="/" aria-label="Ali Mashlah home">am<span>.</span></a><a className="text-link" href="/#work"><ArrowLeft size={16}/>All projects</a><a className="header-contact" href="mailto:alimashlah70@gmail.com">Let’s talk <ArrowUpRight size={16}/></a></header>
    <article className="case-study wrap"><div className="case-intro"><span className="eyebrow">{project.index} / {project.discipline}</span><h1>{project.title}</h1><p className="case-subtitle">{project.subtitle}</p><div className="case-meta"><span>{project.context}</span><div>{project.stack.map(item=><span className="stack-tag" key={item}>{item}</span>)}</div></div></div>
    <ProjectCover project={project}/>
    <div className="case-story"><aside><span className="eyebrow">THE PROJECT</span><p>{project.summary}</p><div className="case-links">{project.live && <a className="primary-link" href={project.slug==='newtons-cradle'?'#experience-heading':project.live} target={project.slug==='newtons-cradle'?undefined:'_blank'} rel={project.slug==='newtons-cradle'?undefined:'noopener noreferrer'}>{project.slug==='newtons-cradle'?'Try the experience':'Visit Lafah'}<ArrowUpRight size={16}/></a>}{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer"><Code2 size={16}/>Project source <ArrowUpRight size={14}/></a>}</div></aside><div><section><span className="eyebrow">THE CHALLENGE</span><h2>What needed to work.</h2><p>{project.challenge}</p></section><section><span className="eyebrow">THE APPROACH</span><h2>Connecting the pieces.</h2><p>{project.approach}</p></section></div></div>
    {project.slug==='pocket-shop'&&<PocketShowcase/>}
    <section className="feature-section"><span className="eyebrow">INSIDE THE PROJECT</span><h2>The details that matter.</h2><div className="feature-grid">{project.features.map((feature,index)=><section key={feature.title}><span className="feature-number">0{index+1}</span><h3>{feature.title}</h3><p>{feature.text}</p></section>)}</div></section>
    <section className="flow-section" aria-label="Project architecture"><span className="eyebrow">HOW IT CONNECTS</span><ol>{project.flow.map((item,index)=><li key={item}><span>{item}</span>{index<project.flow.length-1&&<ArrowRight aria-hidden="true" size={18}/>}</li>)}</ol></section>
    {project.slug==='newtons-cradle'&&<CradleExperience/>}
    <p className="case-note">{project.note}</p>
    <a className="next-project" href={`/work/${nextProject.slug}`}><div><span className="eyebrow">KEEP EXPLORING</span><h2>{nextProject.title}</h2></div><ArrowUpRight size={38}/></a>
    </article><section className="case-contact wrap"><p>Have something similar in mind?</p><a href="mailto:alimashlah70@gmail.com" className="text-link">Let’s talk about your project <ArrowUpRight size={18}/></a></section><footer className="site-footer wrap"><span>© {new Date().getFullYear()} Ali Mashlah</span><a href="tel:+963985055923">+963 985 055 923</a><a href="mailto:alimashlah70@gmail.com">alimashlah70@gmail.com</a></footer></main>;
}

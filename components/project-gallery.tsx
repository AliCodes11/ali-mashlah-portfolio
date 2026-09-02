'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCover } from '@/components/project-cover';
import { projects } from '@/lib/projects';

const categories = ['All work', 'Web & Mobile', 'Graphics', 'Desktop'] as const;
export function ProjectGallery() {
  const [category, setCategory] = useState<string>('All work');
  const visible = projects.filter(project => category === 'All work' || project.category === category);
  return <>
    <div className="gallery-toolbar"><div className="gallery-filters" role="group" aria-label="Filter projects by discipline">{categories.map(item => <Button key={item} variant="ghost" className="filter-button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}</div><span className="project-count" aria-live="polite">{visible.length} projects</span></div>
    <div className="project-grid">{visible.map(project => <a key={project.slug} href={`/work/${project.slug}`} className={`project-card project-${project.slug}`} aria-label={`Explore ${project.title}`}><ProjectCover project={project}/><div className="project-summary"><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={19}/></div><p>{project.summary}</p><div className="project-stack">{project.stack.slice(0,3).map(item => <span key={item}>{item}</span>)}<span className="read-project">View project →</span></div></div></a>)}</div>
  </>;
}

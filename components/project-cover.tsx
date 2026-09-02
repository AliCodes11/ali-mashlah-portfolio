import { ArrowUpRight, Box, MoveUpRight, Orbit, Warehouse } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectCover({ project }: { project: Project }) {
  return <div className={`project-cover cover-${project.slug}`}>
    <span className="project-index">{project.index} / {project.discipline}</span>
    {project.slug === 'pocket-shop' && <><div className="pocket-cover-copy"><strong>Pocket Shop</strong><span>Storefront, cart and operations—connected.</span></div><div className="pocket-cover-screens"><div className="pocket-tablet"><img src="/images/pocket-products.png" alt="Pocket Shop responsive product catalog" loading="lazy"/></div><div className="pocket-phone"><img src="/images/pocket-cart.png" alt="Pocket Shop mobile shopping cart" loading="lazy"/></div></div><span className="cover-note">REAL REACT SCREENS / WEB + MOBILE BACKEND</span></>}
    {project.slug === 'lafah' && <><div className="lafah-word">Lafah<span lang="ar">لفة</span></div><img src="/images/lafah-mascot.png" alt="Lafah’s original shopping bag mascot" loading="lazy"/><span className="cover-note">MANY STORES. ONE MARKETPLACE.</span></>}
    {project.slug === 'newtons-cradle' && <><div className="graphic-title"><Orbit strokeWidth={.8}/><strong>Newton’s<br/>Cradle<span>Experiment in motion.</span></strong></div><span className="cover-note">INTERACTIVE THREE.JS EXPERIENCE <MoveUpRight size={14}/></span></>}
    {project.slug === 'car-dealership' && <><div className="graphic-title"><Box strokeWidth={.8}/><strong>Built in C++.<br/>Explored in 3D.</strong></div><span className="cover-note">OPENGL CAR DEALERSHIP / WINDOWS</span></>}
    {project.slug === 'apartment-booking' && <><strong className="booking-type">Find a place.<br/>Make it<br/><em>your next stay.</em></strong><span className="cover-note">APARTMENT BOOKING / FLUTTER + LARAVEL</span></>}
    {project.slug === 'inventory-management' && <><div className="inventory-type"><Warehouse strokeWidth={1}/><strong>Production<br/>& Inventory</strong></div><span className="cover-note">JAVA / OPERATIONS ON DESKTOP</span></>}
    <ArrowUpRight className="cover-corner" size={21}/>
  </div>;
}

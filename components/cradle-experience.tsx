import { ArrowUpRight, Maximize2 } from 'lucide-react';

export function CradleExperience() {
  return <section className="experience-section original-cradle" aria-labelledby="experience-heading">
    <div className="experience-heading">
      <div><span className="eyebrow">ORIGINAL THREE.JS PROJECT</span><h2 id="experience-heading">The complete simulation lab.</h2></div>
      <p>This is the original project, with its setup screen, 3D scene, live parameters, materials, selection, dragging, collisions, and string-breaking rule.</p>
    </div>
    <div className="original-experience-shell">
      <div className="original-experience-bar"><span><i/> Running the original build</span><a href="/experiences/newtons-cradle/" target="_blank" rel="noopener noreferrer"><Maximize2 size={14}/>Open full screen <ArrowUpRight size={14}/></a></div>
      <iframe className="original-experience-frame" title="Original Newton’s Cradle Simulation Lab" src="/experiences/newtons-cradle/" allow="fullscreen" allowFullScreen />
    </div>
    <p className="experience-instruction"><strong>How to use it:</strong> choose the experiment settings and press “Start Experiment.” In the lab, drag a ball to release it, use Shift or Ctrl to select several balls, and orbit the camera around the scene.</p>
  </section>;
}

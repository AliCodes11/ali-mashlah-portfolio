'use client';
import { useState } from 'react';
import { ArrowUpRight, Pause, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CradleExperience() {
  const [running, setRunning] = useState(false);
  const [version, setVersion] = useState(0);
  return <section className="experience-section" aria-labelledby="experience-heading">
    <div className="experience-heading"><div><span className="eyebrow">YOUR TURN</span><h2 id="experience-heading">Explore the experiment.</h2></div><a className="text-link" href="/experiences/newtons-cradle/index.html" target="_blank" rel="noopener noreferrer">Open full window <ArrowUpRight size={16}/></a></div>
    {running ? <><div className="experience-controls"><Button variant="outline" onClick={() => setRunning(false)}><Pause/>Close experience</Button><Button variant="ghost" onClick={() => setVersion(v => v+1)}><RotateCcw/>Restart</Button></div><iframe key={version} className="cradle-frame" title="Interactive Newton’s Cradle laboratory" src="/experiences/newtons-cradle/index.html" allow="fullscreen" allowFullScreen sandbox="allow-scripts allow-same-origin allow-pointer-lock"/></> : <div className="experience-launch"><span className="eyebrow">THREE.JS / WEBGL</span><h3>Change the settings.<br/>See what happens.</h3><p>Choose the balls, materials, and gravity. Then enter the laboratory and explore the scene.</p><Button className="launch-button" onClick={() => setRunning(true)}><Play size={16}/>Start experience</Button><small>Requires a browser with WebGL support. A larger screen is recommended.</small></div>}
  </section>;
}

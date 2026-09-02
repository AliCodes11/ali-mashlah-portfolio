'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function CradleExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runningRef = useRef(true);
  const elapsedRef = useRef(0);
  const previousFrameRef = useRef(0);
  const amplitudeRef = useRef(30);
  const movingCountRef = useRef(1);
  const draggingRef = useRef(false);
  const [running, setRunning] = useState(true);
  const [ballCount, setBallCount] = useState(5);
  const [length, setLength] = useState(1.15);
  const [gravity, setGravity] = useState(9.81);
  const [amplitude, setAmplitude] = useState(30);
  const [movingCount, setMovingCount] = useState(1);

  runningRef.current = running;
  amplitudeRef.current = amplitude;
  movingCountRef.current = Math.min(movingCount, Math.floor(ballCount / 2));

  const release = useCallback((count = movingCountRef.current) => {
    movingCountRef.current = Math.min(count, Math.floor(ballCount / 2));
    setMovingCount(movingCountRef.current);
    elapsedRef.current = 0;
    previousFrameRef.current = 0;
    setRunning(true);
  }, [ballCount]);

  const reset = useCallback(() => {
    setBallCount(5);
    setLength(1.15);
    setGravity(9.81);
    setAmplitude(30);
    setMovingCount(1);
    movingCountRef.current = 1;
    elapsedRef.current = 0;
    previousFrameRef.current = 0;
    setRunning(true);
  }, []);

  const draw = useCallback((canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d');
    if (!context) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== width * ratio || canvas.height !== height * ratio) {
      canvas.width = width * ratio;
      canvas.height = height * ratio;
    }
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);

    const top = height * 0.2;
    const radius = clamp(width / (ballCount * 3.15), 18, 34);
    const spacing = radius * 2.03;
    const stringLength = Math.min(height * 0.53, length * 245);
    const cradleWidth = spacing * (ballCount - 1);
    const startX = width / 2 - cradleWidth / 2;
    const frameLeft = startX - radius * 2.15;
    const frameRight = startX + cradleWidth + radius * 2.15;
    const floorY = top + stringLength + radius * 1.85;

    context.lineCap = 'round';
    context.strokeStyle = '#38505c';
    context.lineWidth = 7;
    context.beginPath();
    context.moveTo(frameLeft, floorY);
    context.lineTo(frameLeft + radius * 0.5, top - 34);
    context.lineTo(frameRight - radius * 0.5, top - 34);
    context.lineTo(frameRight, floorY);
    context.stroke();
    context.strokeStyle = '#1d303a';
    context.lineWidth = 12;
    context.beginPath();
    context.moveTo(frameLeft - radius, floorY);
    context.lineTo(frameRight + radius, floorY);
    context.stroke();

    const decayedAmplitude = amplitudeRef.current * Math.exp(-elapsedRef.current * 0.035);
    const transfer = Math.cos(elapsedRef.current * Math.sqrt(gravity / length));
    const activeBalls = Math.min(movingCountRef.current, Math.floor(ballCount / 2));

    for (let index = 0; index < ballCount; index += 1) {
      let angle = 0;
      if (transfer >= 0 && index < activeBalls) angle = -decayedAmplitude * transfer;
      if (transfer < 0 && index >= ballCount - activeBalls) angle = -decayedAmplitude * transfer;
      const radians = angle * Math.PI / 180;
      const anchorX = startX + index * spacing;
      const x = anchorX + Math.sin(radians) * stringLength;
      const y = top + Math.cos(radians) * stringLength;

      context.strokeStyle = '#a7bbc6';
      context.lineWidth = 1.25;
      context.beginPath();
      context.moveTo(anchorX, top - 29);
      context.lineTo(x, y);
      context.stroke();

      context.save();
      context.shadowColor = 'rgba(3, 10, 14, .55)';
      context.shadowBlur = 18;
      context.shadowOffsetY = 9;
      const shine = context.createRadialGradient(x - radius * 0.35, y - radius * 0.4, 2, x, y, radius);
      shine.addColorStop(0, '#f7fffe');
      shine.addColorStop(0.18, '#a6f1e4');
      shine.addColorStop(0.58, '#4da694');
      shine.addColorStop(1, '#173d3b');
      context.fillStyle = shine;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    context.fillStyle = '#90a6b4';
    context.font = '11px ui-monospace, SFMono-Regular, monospace';
    context.fillText(`${ballCount} balls · ${length.toFixed(2)} m · ${gravity.toFixed(2)} m/s²`, 22, height - 22);
  }, [ballCount, gravity, length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let frame = 0;
    const observer = new ResizeObserver(() => draw(canvas));
    observer.observe(canvas);
    const animate = (timestamp: number) => {
      if (!previousFrameRef.current) previousFrameRef.current = timestamp;
      const delta = Math.min((timestamp - previousFrameRef.current) / 1000, 0.04);
      previousFrameRef.current = timestamp;
      if (runningRef.current) elapsedRef.current += delta;
      draw(canvas);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [draw]);

  const updateDrag = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!draggingRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const distance = Math.abs(event.clientX - bounds.left - bounds.width / 2);
    setAmplitude(Math.round(clamp(distance / (bounds.width * 0.36) * 48, 8, 48)));
  };

  return <section className="experience-section" aria-labelledby="experience-heading">
    <div className="experience-heading">
      <div><span className="eyebrow">LIVE INTERACTION</span><h2 id="experience-heading">Pull. Release. Transfer the motion.</h2></div>
      <p>This lightweight model runs directly in the page—no iframe and no separate loading screen.</p>
    </div>
    <div className="cradle-lab">
      <div className="cradle-stage">
        <canvas ref={canvasRef} aria-label="Animated Newton’s cradle with adjustable balls, length, gravity and release angle" onPointerDown={event => { draggingRef.current = true; event.currentTarget.setPointerCapture(event.pointerId); setRunning(false); }} onPointerMove={updateDrag} onPointerUp={() => { draggingRef.current = false; release(); }} onPointerCancel={() => { draggingRef.current = false; }} />
        <span className="canvas-hint">Drag across the cradle to change the release angle</span>
      </div>
      <aside className="lab-controls">
        <div className="lab-control"><label htmlFor="balls">Balls <output>{ballCount}</output></label><input id="balls" type="range" min="3" max="7" step="1" value={ballCount} onChange={event => { const value = Number(event.target.value); setBallCount(value); if (movingCount > Math.floor(value / 2)) setMovingCount(Math.max(1, Math.floor(value / 2))); }} /></div>
        <div className="lab-control"><label htmlFor="length">String length <output>{length.toFixed(2)} m</output></label><input id="length" type="range" min="0.7" max="1.6" step="0.05" value={length} onChange={event => setLength(Number(event.target.value))} /></div>
        <div className="lab-control"><label htmlFor="gravity">Gravity <output>{gravity.toFixed(2)}</output></label><input id="gravity" type="range" min="1.62" max="15" step="0.1" value={gravity} onChange={event => setGravity(Number(event.target.value))} /></div>
        <div className="lab-control"><label htmlFor="angle">Release angle <output>{amplitude}°</output></label><input id="angle" type="range" min="8" max="48" step="1" value={amplitude} onChange={event => setAmplitude(Number(event.target.value))} /></div>
        <div className="release-group" aria-label="Choose how many balls to release">{[1,2,3].filter(count => count <= Math.floor(ballCount / 2)).map(count => <Button key={count} variant={movingCount === count ? 'default' : 'outline'} onClick={() => release(count)}>{count} ball{count > 1 ? 's' : ''}</Button>)}</div>
        <div className="lab-actions"><Button variant="outline" onClick={() => setRunning(value => !value)}>{running ? <Pause/> : <Play/>}{running ? 'Pause' : 'Continue'}</Button><Button variant="ghost" onClick={reset}><RotateCcw/>Reset</Button></div>
        <p className="lab-note"><strong>What you are seeing:</strong> an idealized energy-transfer model with gentle damping. It is designed to make the interaction clear, rather than claim laboratory-grade physics.</p>
      </aside>
    </div>
  </section>;
}

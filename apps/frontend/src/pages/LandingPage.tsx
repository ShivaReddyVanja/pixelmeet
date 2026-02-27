import CtaButtons from '@/components/CtaButtons';
import { ArrowDown, Headphones, Zap, Map as MapIcon, Users, Github, Twitter } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="bg-zinc-950 text-zinc-50 min-h-screen w-full font-sans selection:bg-zinc-800 overflow-x-hidden relative">
            {/* Premium Background Layering */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-screen bg-gradient-to-b from-zinc-800/10 via-transparent to-transparent blur-3xl opacity-50" />
            </div>

            <main className="w-full relative z-10">

                {/* HERO SECTION - FOCUSED & IMPACTFUL */}
                <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-16 pt-20 pb-20 text-center relative overflow-hidden">
                    <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center">
                        <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] text-white animate-title-slide">
                            Beyond the
                            <br />
                            <span className="text-zinc-600">Grid.</span>
                        </h1>

                        <p className="mt-12 text-xl md:text-3xl text-zinc-400 font-light max-w-3xl leading-relaxed animate-fade-in-up">
                            Meet in a world that mirrors human connection. A high-performance 2D engine where proximity dictates interaction.
                        </p>

                        <div className="mt-16 flex flex-col sm:flex-row items-center gap-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <CtaButtons />
                        </div>

                        {/* Central App Mockup Visual */}
                        <div className="mt-24 w-full max-w-6xl relative animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-[2.5rem] -z-10" />
                            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-[2rem] backdrop-blur-sm shadow-2xl">
                                <div className="aspect-video bg-zinc-950 rounded-2xl overflow-hidden relative border border-zinc-800 group shadow-inner">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                    <img src="/pixelmeet.png" alt="Metaverse Engine Interface" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2000ms] " />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="px-6 py-3 rounded-full bg-white text-zinc-950 font-bold tracking-widest uppercase text-xs">
                                            Explore World
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-12 flex flex-col items-center gap-4 text-zinc-600 font-mono text-xs uppercase tracking-[0.4em]">
                        <span>Discover</span>
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                </section>

                {/* BENTO GRID - STRICTLY CORE FEATURES */}
                <section className="py-40 px-6 lg:px-16 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-24 text-center">
                            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] mb-6 block">The Engine</h2>
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white">Focused on Presence.</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]">
                            {/* Card 1: Beautiful Maps */}
                            <div className="md:col-span-8 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-12 flex flex-col justify-between overflow-hidden relative group">
                                <div className="z-10 relative">
                                    <div className="h-14 w-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-8 border border-zinc-700">
                                        <MapIcon className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <h4 className="text-4xl font-bold text-white mb-4">Beautiful Maps.</h4>
                                    <p className="text-xl text-zinc-400 font-light max-w-sm leading-relaxed">Design custom 2D environments where your team actually wants to spend time.</p>
                                </div>
                                {/* SVG Visual Decoration */}
                                <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
                                    <svg viewBox="0 0 200 200" className="w-full h-full text-zinc-500">
                                        <path d="M 0 50 L 200 50 M 0 100 L 200 100 M 0 150 L 200 150 M 50 0 L 50 200 M 100 0 L 100 200 M 150 0 L 150 200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                        <rect x="60" y="60" width="80" height="40" rx="4" fill="currentColor" opacity="0.1" />
                                        <rect x="20" y="120" width="100" height="60" rx="4" fill="currentColor" opacity="0.2" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card 2: Spatial Audio */}
                            <div className="md:col-span-4 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative">
                                <div className="z-10">
                                    <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 border border-zinc-700">
                                        <Headphones className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3 leading-tight">Spatial Sound.</h4>
                                    <p className="text-zinc-500 font-light leading-relaxed">Hear the depth of the room. Volume scales with distance.</p>
                                </div>
                                {/* Audio Wave Decor */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 group-hover:opacity-10">
                                    <svg viewBox="0 0 100 100" className="w-full h-full scale-150">
                                        <circle cx="50" cy="50" r="10" stroke="white" fill="none" />
                                        <circle cx="50" cy="50" r="25" stroke="white" fill="none" />
                                        <circle cx="50" cy="50" r="40" stroke="white" fill="none" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card 3: Real-time Sync */}
                            <div className="md:col-span-5 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-10 flex flex-col justify-between group relative overflow-hidden">
                                <div className="z-10">
                                    <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 border border-zinc-700">
                                        <Zap className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3">Instant Sync.</h4>
                                    <p className="text-zinc-500 font-light leading-relaxed">High-performance synchronization for seamless movement across the world.</p>
                                </div>
                                <div className="mt-8 font-mono text-[10px] text-zinc-600 flex gap-4 uppercase tracking-widest">
                                    <span className="text-emerald-500 underline decoration-2 underline-offset-4">Active</span>
                                    <span>60fps Stability</span>
                                </div>
                            </div>

                            {/* Card 4: Proximity Interaction */}
                            <div className="md:col-span-7 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-10 flex items-center justify-between group">
                                <div className="max-w-[60%]">
                                    <div className="h-14 w-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 border border-zinc-700">
                                        <Users className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="text-3xl font-bold text-white mb-4 leading-tight">Meet Naturally.</h4>
                                    <p className="text-zinc-400 font-light leading-relaxed">Walk up to someone to start talking. Shared spaces that work like the real world.</p>
                                </div>
                                {/* Node Link Decor */}
                                <div className="w-32 h-32 hidden sm:block relative">
                                    <div className="absolute top-1/2 left-0 w-8 h-8 rounded-full bg-white" />
                                    <div className="absolute top-1/2 right-0 w-8 h-8 rounded-full border border-white" />
                                    <div className="absolute top-1/2 left-8 right-8 h-px bg-white/20 group-hover:bg-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STORY SECTIONS - CLEAN & FOCUSED */}
                <section className="py-56 px-6 lg:px-16 border-t border-zinc-900 bg-zinc-950">
                    <div className="max-w-7xl mx-auto space-y-64">

                        {/* Interaction Story */}
                        <div className="flex flex-col lg:flex-row items-center gap-32">
                            <div className="w-full lg:w-1/2">
                                <h5 className="text-zinc-500 font-mono text-sm uppercase tracking-[0.5em] mb-8">Interaction</h5>
                                <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-10 leading-[0.9]">Proximity is<br />Presence.</h2>
                                <p className="text-2xl text-zinc-400 leading-relaxed font-light">
                                    Conversations happen when you're close. Move naturally through the space—the technology works behind the scenes to connect you as you walk together.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-md aspect-square bg-zinc-900 border border-zinc-800 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_80%)]" />
                                    <svg viewBox="0 0 400 400" className="w-full h-full p-20 opacity-80">
                                        <circle cx="200" cy="200" r="160" stroke="#3f3f46" fill="none" strokeWidth="1" strokeDasharray="8 8" />
                                        <circle cx="200" cy="200" r="100" stroke="#52525b" fill="none" strokeWidth="1" />
                                        <circle cx="150" cy="180" r="12" fill="white" className="animate-float" />
                                        <circle cx="250" cy="230" r="12" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Audio Architecture Section */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-32">
                            <div className="w-full lg:w-1/2">
                                <h5 className="text-zinc-500 font-mono text-sm uppercase tracking-[0.5em] mb-8">Audio</h5>
                                <h2 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-10 leading-[0.9]">Hear the<br />Room.</h2>
                                <p className="text-2xl text-zinc-400 leading-relaxed font-light">
                                    Sound that moves with you. Volume fades in naturally as you approach someone, and gently drifts away as you leave. It's more than a call—it's a shared world.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-md aspect-[4/3] bg-zinc-900 border border-zinc-800 rounded-[3rem] flex items-center justify-center p-12 shadow-2xl overflow-hidden">
                                    <div className="w-full h-px bg-zinc-800 absolute top-1/2 left-0" />
                                    <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                                        <path d="M 0 50 Q 50 0, 100 50 T 200 50" fill="none" stroke="white" strokeWidth="2" className="animate-[grow_3s_infinite_ease-in-out]" />
                                        <path d="M 0 50 Q 50 10, 100 50 T 200 50" fill="none" stroke="#52525b" strokeWidth="1" opacity="0.5" className="animate-[grow_4s_infinite_ease-in-out_200ms]" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
            </main>

            <footer className="border-t border-zinc-900 bg-black py-16 relative z-10 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <span className="text-white font-black text-3xl tracking-tighter uppercase">PixelMeet.</span>
                    <div className="flex gap-10 text-xs font-mono tracking-[0.2em] text-zinc-600 uppercase">
                        <a href="https://github.com/ShivaReddyVanja/pixelmeet" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                        <a href="https://x.com/shivareddyvanja" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors flex items-center gap-2">
                            <Twitter className="w-4 h-4" />
                            Twitter
                        </a>
                    </div>
                    <p className="text-zinc-700 text-[10px] font-mono tracking-[0.2em]">© 2026 SHIVA REDDY VANJA. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>

            <style>{`
        @keyframes title-slide { from { opacity: 0; transform: translateY(60px) skewY(3deg); } to { opacity: 1; transform: translateY(0) skewY(0); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        @keyframes grow { 0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1.3); } }
        .animate-title-slide { animation: title-slide 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up { opacity: 0; animation: fade-in-up 1.2s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
        </div>
    );
}

import { api } from '@/services/api';
import type { SocketConnectionData } from '@/types';
import axios from 'axios';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Zap, Loader2 } from 'lucide-react';

export default function JoinPage() {
    const [searchParams] = useSearchParams();
    const initialRoomId = searchParams.get('roomid') || "";

    const [name, setName] = useState("");
    const [roomId, setRoomId] = useState(initialRoomId);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name || !roomId) {
            console.error("Name and Room ID are required.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await api.post("/join", { name, roomId });
            const data = response.data;

            localStorage.setItem("connectionInfo", JSON.stringify({
                userId: data.userId,
                roomId: data.roomId,
                socket: data.socket,
                token: data.token
            }));

            navigate(`/meet?id=${roomId}`);
        } catch (e: unknown) {
            if (axios.isAxiosError(e)) {
                console.error(e.response?.data?.message ?? e.message);
            } else if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.error(e);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-zinc-950 text-zinc-50 min-h-screen flex flex-col font-sans selection:bg-zinc-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <header className="container mx-auto px-6 lg:px-16 py-8 relative z-10">
                <Link to="/" className="text-2xl font-black tracking-tighter uppercase text-white hover:text-zinc-400 transition-colors">
                    PixelMeet.
                </Link>
            </header>

            <main className="flex-grow flex items-center justify-center p-6 relative z-10">
                <div className="w-full max-w-md">
                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-10 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
                        {/* Glow effect */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors" />

                        <div className="text-center mb-10">
                            <div className="inline-flex h-12 w-12 rounded-2xl bg-zinc-800 items-center justify-center mb-6 border border-zinc-700">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-4xl font-black tracking-tight mb-3">Join Room</h1>
                            <p className="text-zinc-500 font-light text-xs uppercase tracking-widest">Enter details to join.</p>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="roomId" className="block text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-3 ml-1">
                                    Room ID
                                </label>
                                <input
                                    type="text"
                                    id="roomId"
                                    name="roomId"
                                    value={roomId}
                                    onChange={(e) => setRoomId(e.target.value)}
                                    required
                                    placeholder="e.g., room-123"
                                    className="w-full px-5 py-4 bg-zinc-950 text-white border border-zinc-800 rounded-2xl focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-3 ml-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="e.g., Alex Doe"
                                    className="w-full px-5 py-4 bg-zinc-950 text-white border border-zinc-800 rounded-2xl focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-white text-zinc-950 font-bold py-4 px-6 rounded-2xl hover:bg-zinc-200 transition-all duration-300 transform active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-4 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Connecting...</span>
                                    </>
                                ) : (
                                    "Join Room"
                                )}
                            </button>
                        </form>

                        <div className="text-center mt-10">
                            <Link to="/" className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors inline-flex items-center gap-2">
                                <ArrowLeft className="h-3 w-3" />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center relative z-10">
                <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.3em]">© 2026 Engine Unit</p>
            </footer>
        </div>
    );
}

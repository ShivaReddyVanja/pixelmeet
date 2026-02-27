import { useNavigate } from 'react-router-dom';

const CtaButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <button
        onClick={() => navigate("/create")}
        className="w-full sm:w-auto bg-zinc-50 hover:bg-white text-zinc-950 font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105 duration-300"
      >
        Create Space
      </button>
      <button
        onClick={() => navigate("/join")}
        className="w-full sm:w-auto bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/30 text-zinc-300 hover:text-white font-medium uppercase tracking-widest text-sm py-4 px-10 rounded-full transition-all transform hover:scale-105 duration-300"
      >
        Join Space
      </button>
    </div>
  );
};

export default CtaButtons;
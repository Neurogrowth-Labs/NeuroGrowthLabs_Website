import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Hexagon, ArrowLeft, Home } from 'lucide-react';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';
import { MagneticButton } from '../components/ui/MagneticButton';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-midnight-black text-slate-300 min-h-screen font-sans selection:bg-electric-blue/30 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-10 md:p-14 rounded-3xl bg-glass-surface border border-glass-border shadow-2xl backdrop-blur-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center mx-auto mb-6">
              <Hexagon className="w-8 h-8 text-ai-cyan animate-pulse" />
            </div>

            <span className="text-ai-cyan font-mono text-sm uppercase tracking-widest block mb-2">404 Error</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-quantum-silver text-sm md:text-base leading-relaxed mb-8">
              The coordinate you requested does not exist in our neural index or has been relocated.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-ai-cyan to-electric-blue text-midnight-black font-semibold rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Home className="w-4 h-4" /> Return to Home
              </MagneticButton>

              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-glass-border text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PartnerCardProps {
    partner: {
        name: string;
        logo: string;
        url: string;
    };
    index: number;
    hasContent: boolean;
    small?: boolean;
}

export function PartnerCard({ partner, index, hasContent, small = false }: PartnerCardProps) {
    return (
        <motion.a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-center ${small ? 'w-48 h-28' : 'w-72 h-40'} border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${hasContent ? 'bg-[#E5E5E5] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'bg-[#0A0A15]/30'}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={hasContent ? { y: -5 } : {}}
            onClick={(e) => !hasContent && e.preventDefault()}
        >
            {!hasContent ? (
                <div className="text-white/20 font-mono text-sm tracking-widest">Available</div>
            ) : (
                <>
                    {/* Tech corners */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-400 group-hover:border-gray-600 transition-colors" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-400 group-hover:border-gray-600 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-400 group-hover:border-gray-600 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-400 group-hover:border-gray-600 transition-colors" />

                    {/* Logo (Default Visible) */}
                    <div className={`absolute inset-0 flex items-center justify-center ${small ? 'p-4' : 'p-8'} transition-all duration-300 group-hover:opacity-10 group-hover:blur-sm`}>
                        {partner.logo ? (
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-full object-contain drop-shadow-sm"
                            />
                        ) : (
                            <span className="text-gray-400 font-bold text-xl">{partner.name}</span>
                        )}
                    </div>

                    {/* Name via Hover (Default Hidden) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <span className={`font-heading font-bold ${small ? 'text-lg' : 'text-2xl'} text-gray-800 tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}>
                            {partner.name}
                        </span>
                    </div>

                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-4 h-4 text-gray-600" />
                    </div>
                </>
            )}
        </motion.a>
    );
}

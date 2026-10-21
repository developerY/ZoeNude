import React, { useState } from 'react';
import { COMMUNITY_POSTS, PRODUCTS } from '../data/cosmeticsData';
import { Instagram, Heart, Sparkles, ArrowRight, Share2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CommunityPage: React.FC = () => {
  const [likes, setLikes] = useState<Record<string, number>>(
    COMMUNITY_POSTS.reduce((acc, p) => ({ ...acc, [p.id]: p.likes }), {})
  );
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    setUserLiked((prev) => {
      const isAlreadyLiked = !!prev[id];
      setLikes((likeCounts) => ({
        ...likeCounts,
        [id]: isAlreadyLiked ? likeCounts[id] - 1 : likeCounts[id] + 1,
      }));
      return { ...prev, [id]: !isAlreadyLiked };
    });
  };

  return (
    <div className="bg-[#FCF9F3] min-h-screen pb-24 animate-fadeIn">
      {/* Page Banner */}
      <section className="bg-[#FAF6F0] py-14 sm:py-20 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-semibold tracking-[0.2em] text-[#85513f] uppercase">
            <Instagram size={14} />
            <span>COMMUNITY GALLERY</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211E] font-normal">
            #LifeLooksGoodOnYou
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#4E4542] max-w-xl mx-auto leading-relaxed">
            Real skin, unretouched moments, and genuine morning rituals shared by clients around the world.
          </p>

          <div className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#85513f] hover:text-[#2B211E] border-b border-[#85513f] pb-0.5"
            >
              <span>Follow @ZoeNudeAtelier</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_POSTS.map((post) => {
            const isLiked = !!userLiked[post.id];
            return (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[#FAF6F0]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FCF9F3]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-serif italic text-[#2B211E] border border-[#E8DFD5]/60">
                    {post.tag}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-[#2B211E]">
                      {post.author}
                    </span>
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-1 text-xs text-[#85513f] hover:text-[#2B211E] transition-colors"
                    >
                      <Heart
                        size={15}
                        className={isLiked ? 'fill-[#e63946] text-[#e63946]' : 'text-[#85513f]'}
                      />
                      <span>{likes[post.id]}</span>
                    </button>
                  </div>

                  <p className="font-sans text-xs text-[#4E4542] leading-snug">
                    {post.title}
                  </p>

                  <div className="pt-2 border-t border-[#F0EEE8] flex items-center justify-between text-[11px] font-sans">
                    <Link
                      to="/shop"
                      className="text-[#85513f] hover:text-[#2B211E] font-medium"
                    >
                      Shop Featured Look →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Tag Callout */}
        <div className="bg-[#FAF6F0] rounded-2xl p-8 sm:p-12 border border-[#E8DFD5] text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#85513f] block">
            JOIN THE CONVERSATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211E]">
            Share Your Living Skin Moment
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4E4542] leading-relaxed max-w-xl mx-auto">
            Tag <strong className="text-[#2B211E]">@ZoeNudeAtelier</strong> and <strong className="text-[#2B211E]">#LifeLooksGoodOnYou</strong> on Instagram to be featured in our seasonal lookbook and receive a bespoke atelier sample gift.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="bg-[#2B211E] hover:bg-[#433430] text-white text-xs font-semibold px-8 py-3.5 rounded tracking-wider uppercase transition-colors inline-block"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

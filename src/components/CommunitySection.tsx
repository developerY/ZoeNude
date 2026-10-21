import React, { useState } from 'react';
import { COMMUNITY_POSTS } from '../data/cosmeticsData';
import { Instagram, Heart, ExternalLink } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="bg-[#FCF9F3] py-20 border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Image_9 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#6E625D] uppercase block mb-1">
              COMMUNITY GALLERY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2B211E] font-normal">
              #LifeLooksGoodOnYou
            </h2>
          </div>

          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.14em] uppercase text-[#2B211E] hover:text-[#85513f] transition-colors"
            >
              <Instagram size={14} />
              <span>FOLLOW @ZOENUDEATELIER</span>
            </a>
          </div>
        </div>

        {/* 4 Square Tiles matching Image_9 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMMUNITY_POSTS.map((post) => {
            const isLiked = !!likedPosts[post.id];
            return (
              <div
                key={post.id}
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#E8DFD5] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtitle tag in bottom banner */}
                <div className="absolute top-3 left-3 bg-[#FCF9F3]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-serif italic text-[#2B211E] border border-[#E8DFD5]/60 shadow-xs">
                  {post.tag}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                  <div className="flex justify-end">
                    <button
                      onClick={(e) => toggleLike(post.id, e)}
                      className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors focus:outline-none"
                    >
                      <Heart
                        size={16}
                        className={isLiked ? 'fill-[#e63946] text-[#e63946]' : 'text-white'}
                      />
                    </button>
                  </div>

                  <div>
                    <span className="block text-[11px] font-sans font-semibold tracking-wider">
                      {post.author}
                    </span>
                    <p className="text-[10px] text-white/80 line-clamp-2 mt-0.5 font-light">
                      {post.title}
                    </p>
                    <span className="text-[9px] text-[#feb9a3] mt-1 block">
                      {isLiked ? post.likes + 1 : post.likes} Loves
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

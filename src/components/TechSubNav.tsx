import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface TechSubNavProps {
  active: 'overview' | 'packaging' | 'distribution';
}

export const TechSubNav: React.FC<TechSubNavProps> = ({ active }) => {
  const tabs = [
    { id: 'overview' as const, label: 'Tech Overview', to: '/about/tech' },
    { id: 'packaging' as const, label: 'Packaging Innovation', to: '/about/tech/packaging' },
    { id: 'distribution' as const, label: 'Distribution Architecture', to: '/about/tech/distribution' },
  ];

  const activeLabel =
    active === 'packaging'
      ? 'Packaging'
      : active === 'distribution'
      ? 'Distribution'
      : null;

  return (
    <div className="bg-[#FAF4EC] border-b border-[#EADED5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Clean Editorial Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs font-sans text-[#6E625D]">
          <Link to="/about" className="hover:text-[#2B211E] transition-colors whitespace-nowrap shrink-0">
            About
          </Link>
          <ChevronRight size={13} className="text-[#A89891] shrink-0" aria-hidden="true" />
          <Link
            to="/about/tech"
            className={`transition-colors whitespace-nowrap shrink-0 ${
              active === 'overview' ? 'text-[#2B211E] font-semibold' : 'hover:text-[#2B211E]'
            }`}
          >
            Tech
          </Link>
          {activeLabel && (
            <>
              <ChevronRight size={13} className="text-[#A89891] shrink-0" aria-hidden="true" />
              <span className="text-[#2B211E] font-semibold whitespace-nowrap shrink-0">
                {activeLabel}
              </span>
            </>
          )}
        </nav>

        {/* Segmented Sub-Page Navigation */}
        <div className="flex items-center space-x-1 p-1 bg-[#F1E7DC] rounded-lg overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <Link
                key={tab.id}
                to={tab.to}
                className={`px-3.5 py-1.5 text-xs font-sans font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-[#2B211E] shadow-2xs font-semibold'
                    : 'text-[#5C4D47] hover:text-[#2B211E]'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

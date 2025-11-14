// src/app/components/GNB.tsx
'use client';

import Link from 'next/link';
import LinkButton from './buttons/LinkButton';

const GNB = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-8 lg:px-10">
        
        {/* logo */}
        <Link href="/" className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center text-lg font-bold tracking-tight">
            Logo
          </div>
        </Link>

        {/* login & sign up */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <LinkButton href="/login" variant="ghost" className="px-0">
            로그인
          </LinkButton>
          <div className="hidden h-4 w-px bg-white/50 sm:block" />
          <LinkButton href="/signup" variant="ghost" className="px-0">
            회원가입
          </LinkButton>
        </div>
      </nav>
    </header>
  );
};

export default GNB;
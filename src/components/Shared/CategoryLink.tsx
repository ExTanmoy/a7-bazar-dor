'use client';

import { Category } from '@/types/bazardor';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategoryLink = ({ category }: { category: Category }) => {
  const pathname = usePathname();
  const isActive = pathname === `/category/${category.slug}`;

  return (
    <Link
      href={`/category/${category.slug}`}
      className={`flex gap-1.5 text-sm font-bold rounded-xl px-2 sm:px-4 py-2 transition-all duration-200 ${
        isActive ? 'bg-green-700 text-white' : 'hover:bg-mauve-200 hover:scale-105'
      }`}
    >
      <span>{category.icon}</span>
      <span>{category.nameBn}</span>
    </Link>
  );
}

export default CategoryLink;
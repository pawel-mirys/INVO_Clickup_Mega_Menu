import { BlogCardProps } from '@/global-components/BlogCard/BlogCard';
import styles from './Blog.module.scss';

const coverURL = '/public/images/cover.png';

export const blogPosts: BlogCardProps[] = [
  {
    content: '10 Best Google Docs Alternatives & Competitors 2023',
    coverSrc: coverURL,
    coverAlt: 'blog cover',
  },
  {
    content: '10 Best Google Docs Alternatives & Competitors 2023',
    coverSrc: coverURL,
    coverAlt: 'blog cover',
    className: styles.blogPost,
  },
  {
    content: 'Best 10 Free Microsoft Word Alternatives 2023',
    coverSrc: coverURL,
    coverAlt: 'blog cover',
    className: styles.blogPost,
  },
];

import { BlogCardProps } from '@/global-components/BlogCard/BlogCard';
import { CardProps } from '@/global-components/Card/Card';
import styles from './LearnMenu.module.scss';

const coverURL = '/src/assets/images/cover.png';

export const freeList: CardProps[] = [
  {
    title: 'Getting Started',
    description: 'All the tools you need to get started in ClickUp.',
    variant: 'gettingStarted',
    className: styles.freeLearnCard,
    icon: 'promotion',
  },
  {
    title: 'ClickUp University',
    description: 'Master productivity with interactive ClickUp courses.',
    variant: 'clickupUniversity',
    className: styles.freeLearnCard,
    icon: 'graduate',
  },
  {
    title: 'Demos',
    description: 'Watch quick videos to learn basics of ClickUp.',
    variant: 'demos',
    className: styles.freeLearnCard,
    icon: 'monitor',
  },
  {
    title: 'Import',
    description: 'Bring all other work into ClickUp in one easy import.',
    variant: 'import',
    className: styles.freeLearnCard,
    icon: 'download',
  },
  {
    title: 'Customers',
    description: 'See why ClickUp means success for our clients.',
    variant: 'customers',
    className: styles.freeLearnCard,
    icon: 'like',
  },
  {
    title: 'Help Docs',
    description: 'Find simple answers to questions about ClickUp.',
    variant: 'helpDocs',
    className: styles.freeLearnCard,
    icon: 'book',
  },
];

export const premiumList: CardProps[] = [
  {
    title: 'Professional Services',
    description:
      'Get premium support and hands-on help from our Professional Services Team.',
    variant: 'professionalServices',
    className: styles.premiumLearnCard,
    icon: 'favorite',
  },
  {
    title: '100+ Verified Third-Party Consultants',
    description:
      'Hire a verred third-party ClickUp expert to help you with training. Workspace setup, workflows and more.',
    variant: 'thirdParty',
    className: styles.premiumLearnCard,
    icon: 'user2',
  },
];

export const blogPosts: BlogCardProps[] = [
  {
    content: '10 Best Google Docs Alternatives & Competitors 2023',
    coverSrc: coverURL,
    coverAlt: 'blog cover',
    className: styles.blogPost,
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

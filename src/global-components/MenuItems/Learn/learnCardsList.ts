import { CardProps } from '@/global-components/Card/Card';
import styles from './Learn.module.scss';

export const freeList: CardProps[] = [
  {
    title: 'Getting Started',
    description: 'All the tools you need to get started in ClickUp.',
    variant: 'gettingStarted',
    icon: 'promotion',
  },
  {
    title: 'ClickUp University',
    description: 'Master productivity with interactive ClickUp courses.',
    variant: 'clickupUniversity',
    icon: 'graduate',
  },
  {
    title: 'Demos',
    description: 'Watch quick videos to learn basics of ClickUp.',
    variant: 'demos',
    icon: 'monitor',
  },
  {
    title: 'Import',
    description: 'Bring all other work into ClickUp in one easy import.',
    variant: 'import',
    icon: 'download',
  },
  {
    title: 'Customers',
    description: 'See why ClickUp means success for our clients.',
    variant: 'customers',
    icon: 'like',
  },
  {
    title: 'Help Docs',
    description: 'Find simple answers to questions about ClickUp.',
    variant: 'helpDocs',
    icon: 'book',
  },
];

export const premiumList: CardProps[] = [
  {
    title: 'Professional Services',
    description:
      'Get premium support and hands-on help from our Professional Services Team.',
    variant: 'professionalServices',
    icon: 'favorite',
  },
  {
    title: '100+ Verified Third-Party Consultants',
    description:
      'Hire a verred third-party ClickUp expert to help you with training. Workspace setup, workflows and more.',
    variant: 'thirdParty',
    icon: 'user2',
  },
];

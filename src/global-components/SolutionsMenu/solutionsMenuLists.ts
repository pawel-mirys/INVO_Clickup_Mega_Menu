import { CardProps } from '@/global-components/Card/Card';
import styles from './SolutionsMenu.module.scss';

export const teamCardsList: CardProps[] = [
  {
    title: 'Engineering',
    description: 'Break down any size project into customized tasks.',
    variant: 'team',
    className: styles.teamCard,
    icon: 'settings1',
  },
  {
    title: 'Product',
    description: 'Manage product roadmaps from ideation to release.',
    variant: 'team',
    className: styles.teamCard,
    icon: 'delivery',
  },
  {
    title: 'Marketing',
    description: 'Collaborate on campaigns, clients, content and more.',
    variant: 'team',
    className: styles.teamCard,
    icon: 'horn',
  },
  {
    title: 'Design',
    description: 'Streamline workflows, files and feedback.',
    variant: 'team',
    className: styles.teamCard,
    icon: 'pen',
  },
  {
    title: 'Human Resources',
    description: 'Manage, train and nurture your talent in one place.',
    variant: 'team',
    className: styles.teamCard,
    icon: 'user',
  },
  {
    title: 'Operations',
    description: 'Streamline workflows to increase business efficiency.',
    variant: 'team',
    className: styles.teamCard,
    icon: 'settings2',
  },
];

export const useCaseCardsList: CardProps[] = [
  {
    title: 'Project Management',
    description: 'Manage and track projects of any type and size.',
    variant: 'useCase',
    className: styles.useCaseCard,
    icon: 'bullet-list',
  },
  {
    title: 'Remote Work',
    description: 'Stay on the same page even if you’re not in the room.',
    variant: 'useCase',
    className: styles.useCaseCard,
    icon: 'earth',
  },
  {
    title: 'CRM',
    description: 'All your clients and their info in one place.',
    variant: 'useCase',
    className: styles.useCaseCard,
    icon: 'group',
  },
];

export const typeCardsList: CardProps[] = [
  {
    title: 'Enterprice',
    description: 'Align your organization toward company-wide goals.',
    variant: 'type',
    className: styles.typeCard,
    icon: 'suitcase',
  },
  {
    title: 'Startup',
    description: 'Iterate quickly with a system that scales as you grow.',
    variant: 'type',
    className: styles.typeCard,
    icon: 'light',
  },
  {
    title: 'Non-Profit',
    description: 'Save time working, spend more time saving the word.',
    variant: 'type',
    className: styles.typeCard,
    icon: 'heart',
  },
];

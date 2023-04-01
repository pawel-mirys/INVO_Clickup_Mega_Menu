import { CardProps } from '@/global-components/Card/Card';
import styles from './Team.module.scss';

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

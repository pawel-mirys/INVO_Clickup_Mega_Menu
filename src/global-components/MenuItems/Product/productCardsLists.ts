import { CardProps } from '@/global-components/Card/Card';
import styles from './Product.module.scss';

export const productCardsList: CardProps[] = [
  {
    title: 'Tasks',
    description: 'Break down any size project into customized tasks.',
    variant: 'tasks',
    icon: 'done',
  },
  {
    title: 'Docs',
    description: 'Create beautiful dosc and connect them to tasks.',
    variant: 'docs',
    icon: 'documents',
  },
  {
    title: 'Goals',
    description: 'Track work against strategy with measurable targets.',
    variant: 'goals',
    className: styles.productCard,
    icon: 'cup',
  },
  {
    title: 'Whiteboards',
    description: 'Bring team ideas to life with visual collaboration.',
    variant: 'whiteboards',
    icon: 'tablet',
  },
  {
    title: 'Dashboards',
    description: 'Visualize progress with real-time reporting.',
    variant: 'dashboards',
    icon: 'grid',
  },
  {
    title: 'Chat',
    description: 'Colaborate with your team in real-time.',
    variant: 'chat',
    icon: 'hashtag',
  },
];

import { CardProps } from '@/global-components/Card/Card';
import styles from './ProductMenu.module.scss';

export const productCardsList: CardProps[] = [
  {
    title: 'Tasks',
    description: 'Break down any size project into customized tasks.',
    variant: 'tasks',
    className: styles.productCard,
    icon: 'done',
  },
  {
    title: 'Docs',
    description: 'Create beautiful dosc and connect them to tasks.',
    variant: 'docs',
    className: styles.productCard,
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
    className: styles.productCard,
    icon: 'tablet',
  },
  {
    title: 'Dashboards',
    description: 'Visualize progress with real-time reporting.',
    variant: 'dashboards',
    className: styles.productCard,
    icon: 'grid',
  },
  {
    title: 'Chat',
    description: 'Colaborate with your team in real-time.',
    variant: 'chat',
    className: styles.productCard,
    icon: 'hashtag',
  },
];

export const platformCardsList: CardProps[] = [
  {
    title: 'Templates',
    description: 'Save time on project prep with a custom template.',
    variant: 'templates',
    className: styles.platformCard,
    icon: 'pages',
  },
  {
    title: 'ClickApps',
    description: 'Add even more custom tools to your workflow.',
    variant: 'clickapps',
    className: styles.platformCard,
    icon: 'puzzle',
  },
  {
    title: 'Integrations',
    description: 'Connect your favourite apps to your workflow.',
    variant: 'integrations',
    className: styles.platformCard,
    icon: 'broken-link',
  },
  {
    title: 'Views',
    description: 'View your work in the way that works best for you.',
    variant: 'views',
    className: styles.platformCard,
    icon: 'eye',
  },
  {
    title: 'Hierarchy',
    description: 'See the big picture without missing the details',
    variant: 'hierarchy',
    className: styles.platformCard,
    icon: 'chart',
  },
  {
    title: 'Automations',
    description: 'Put your routine busywork on autopilot.',
    variant: 'automations',
    className: styles.platformCard,
    icon: 'screen',
  },
];

import { CardProps } from '@/global-components/Card/Card';
import styles from './Platform.module.scss';

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

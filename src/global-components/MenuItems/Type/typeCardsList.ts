import { CardProps } from '@/global-components/Card/Card';
import styles from './Type.module.scss';

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

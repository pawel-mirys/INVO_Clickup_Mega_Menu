import { CardProps } from '@/global-components/Card/Card';
import styles from './UseCase.module.scss';

export const useCaseCardsList: CardProps[] = [
  {
    title: 'Project Management',
    description: 'Manage and track projects of any type and size.',
    variant: 'useCase',
    icon: 'bullet-list',
  },
  {
    title: 'Remote Work',
    description: 'Stay on the same page even if you’re not in the room.',
    variant: 'useCase',
    icon: 'earth',
  },
  {
    title: 'CRM',
    description: 'All your clients and their info in one place.',
    variant: 'useCase',
    icon: 'group',
  },
];

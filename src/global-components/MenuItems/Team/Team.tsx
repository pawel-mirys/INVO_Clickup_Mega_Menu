import { Button } from '@/global-components/Button/Button';
import React from 'react';
import styles from './Team.module.scss';
import { teamCardsList } from './TeamCardsList';
import { Card } from '@/global-components/Card/Card';
import { Icon } from '@/global-components/Icon/Icon';

export const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.teamHeader}>TEAM</h2>
      <div className={styles.teamList}>
        {teamCardsList.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              variant={item.variant}
              className={styles.teamCard}
              icon={item.icon}
            />
          );
        })}
      </div>
      <Button className={styles.teamButton}>
        See All <Icon size={24} name='arrow-team' />
      </Button>
    </div>
  );
};

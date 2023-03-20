import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Card } from '@/global-components/Card/Card';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './SolutionsMenu.module.scss';
import {
  teamCardsList,
  useCaseCardsList,
  typeCardsList,
} from './solutionsMenuLists';

export const SolutionsMenu = () => {
  return (
    <div className={styles.solutionsMenu}>
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
                className={item.className}
                icon={item.icon}
              />
            );
          })}
        </div>
        <Button className={styles.teamButton}>
          See All <Icon size={24} name='arrow-team' />
        </Button>
      </div>
      <div className={styles.useCaseContainer}>
        <h2 className={styles.useCaseHeader}>USE CASE</h2>
        <div className={styles.useCaseList}>
          {useCaseCardsList.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                variant={item.variant}
                className={item.className}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.typeContainer}>
        <h2 className={styles.typeHeader}>TYPE</h2>
        <div className={styles.typeList}>
          {typeCardsList.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                variant={item.variant}
                className={item.className}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

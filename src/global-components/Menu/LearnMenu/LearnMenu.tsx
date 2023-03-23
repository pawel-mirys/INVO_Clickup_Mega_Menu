import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Card } from '@/global-components/Card/Card';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './LearnMenu.module.scss';
import { freeList, premiumList, blogPosts } from './learnMenuLists';
import { BlogCard } from '@/global-components/BlogCard/BlogCard';
import clsx from 'clsx';

export const LearnMenu = () => {
  return (
    <div className={styles.learnMenu}>
      <div className={styles.learnContainer}>
        <div className={styles.freeContainer}>
          <h2 className={clsx(styles.freeHeader, styles.header)}>LEARN</h2>
          <div className={styles.freeList}>
            {freeList.map((item, index) => {
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
        <div className={styles.premiumContainer}>
          <h2 className={clsx(styles.premiumHeader, styles.header)}>
            PREMIUM SUPPORT
          </h2>
          <div className={styles.premiumList}>
            {premiumList.map((item, index) => {
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
      <div className={styles.blogContainer}>
        <div className={styles.blogHeading}>
          <h2 className={clsx(styles.blogHeader, styles.header)}>
            LATEST FROM BLOG
          </h2>
          <Button className={styles.blogButton} variant='clear'>
            See All <Icon name='arrow2' />
          </Button>
        </div>
        <div className={styles.blogList}>
          {blogPosts.map((item, index) => {
            return (
              <BlogCard
                key={index}
                content={item.content}
                coverSrc={item.coverSrc}
                coverAlt={item.coverAlt}
                className={item.className}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

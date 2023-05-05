import React from 'react';
import styles from './Blog.module.scss';

import { Button } from '@/global-components/Button/Button';
import clsx from 'clsx';
import { Icon } from '@/global-components/Icon/Icon';
import { blogPosts } from './blogCardsList';
import { BlogCard } from '../../BlogCard/BlogCard';

export const Blog = () => {
  return (
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
              className={styles.blogPost}
            />
          );
        })}
      </div>
    </div>
  );
};

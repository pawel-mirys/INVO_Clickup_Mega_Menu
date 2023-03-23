import clsx from 'clsx';
import React from 'react';
import styles from './BlogCard.module.scss';

export type BlogCardProps = {
  className?: string;
  content: string;
  coverSrc: string;
  coverAlt: string;
};

export const BlogCard = ({
  className,
  content,
  coverSrc,
  coverAlt,
}: BlogCardProps) => {
  return (
    <a href='#' className={clsx(styles.blogCard, className)}>
      <div className={styles.cover}>
        <img className={styles.coverImage} src={coverSrc} alt={coverAlt} />
      </div>
      <p className={styles.content}>{content}</p>
    </a>
  );
};

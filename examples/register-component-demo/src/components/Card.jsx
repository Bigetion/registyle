import React from 'react';
import { cx } from 'registyle';

export function Card({ children, className }) {
  return <div className={cx('card', className)}>{children}</div>;
}

export function CardHeader({ children, className }) {
  return <div className={cx('card-header', className)}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h3 className={cx('card-title', className)}>{children}</h3>;
}

export function CardBody({ children, className }) {
  return <div className={cx('card-body', className)}>{children}</div>;
}

export function CardFooter({ children, className }) {
  return <div className={cx('card-footer', className)}>{children}</div>;
}

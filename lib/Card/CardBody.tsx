import { twMerge } from 'tailwind-merge';
import { ICardBody } from './interfaces';
import './Card.styles.css';

const CardBody = ({ children, className }: ICardBody) => {
  return <div className={twMerge('card__body', className)}>{children}</div>;
};

export default CardBody;

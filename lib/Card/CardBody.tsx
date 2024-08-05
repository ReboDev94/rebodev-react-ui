import { twMerge } from 'tailwind-merge';
import { ICardBody } from './interfaces';

const CardBody = ({ children, className }: ICardBody) => {
  return (
    <div aria-label="CardBody" className={twMerge('card__body', className)}>
      {children}
    </div>
  );
};

export default CardBody;

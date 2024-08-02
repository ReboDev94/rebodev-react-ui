import { twMerge } from 'tailwind-merge';

const BackDrop = () => {
  return <div aria-label="BackDrop" className={twMerge('modal__backdrop')} />;
};

export default BackDrop;

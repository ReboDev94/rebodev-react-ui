import { twMerge } from 'tailwind-merge';

const BackDrop = () => {
  return <div className={twMerge('modal__backdrop')} />;
};

export default BackDrop;

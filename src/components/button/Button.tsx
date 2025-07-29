import IconArrow from '../../assets/icons/arrow.svg?no-inline';
import styles from './button.module.scss';
const Button = () => {
  return (
    <>
      <button className={styles.btn} type='button'>
        Заказать услугу{' '}
        <svg width='20' height='20'>
          <use href={IconArrow}></use>
        </svg>
      </button>
    </>
  );
};

export default Button;

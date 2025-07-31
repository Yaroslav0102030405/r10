import IconArrow from '../../assets/icons/arrow.svg?no-inline';
import styles from './button.module.scss';
import { useState, useEffect } from 'react';

const Button = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isMenuVisible2, setIsMenuVisible2] = useState<boolean>(false);
  const [isMenuVisible3, setIsMenuVisible3] = useState<boolean>(false);
  const [isMenuVisible4, setIsMenuVisible4] = useState<boolean>(false);

  const handleMouseEnter = (e: MouseEvent<HTMLLIElement>) => {
    setIsMenuVisible(true);
    console.log(e.target);
  };
  // Обробник відведення курсора
  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  const handleMouseEnter2 = () => {
    setIsMenuVisible2(true);
  };
  // Обробник відведення курсора
  const handleMouseLeave2 = () => {
    setIsMenuVisible2(false);
  };

  const handleMouseEnter3 = () => {
    setIsMenuVisible3(true);
  };
  // Обробник відведення курсора
  const handleMouseLeave3 = () => {
    setIsMenuVisible3(false);
  };

  const handleMouseEnter4 = () => {
    setIsMenuVisible4(true);
  };
  // Обробник відведення курсора
  const handleMouseLeave4 = () => {
    setIsMenuVisible4(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModal((prevState) => !prevState);
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleModal = () => {
    setModal((prevState) => !prevState);
    console.log(modal);
  };

  const handleModal2 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModal((prevState) => !prevState);
    }
    console.log(e.target);
    console.log(e.currentTarget);
  };

  return (
    <>
      <button onClick={handleModal} className={styles.btn} type='button'>
        Заказать услугу{' '}
        <svg width='20' height='20'>
          <use href={IconArrow}></use>
        </svg>
      </button>
      {modal && (
        <div onClick={handleModal2} className='backdrop'>
          <div className='modal'>
            <button onClick={handleModal} type='button'>
              Закрити
            </button>
          </div>
        </div>
      )}
      <ul style={{ display: 'flex', gap: '30px' }}>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href='#home'>Головна</a>
          {isMenuVisible && (
            <ul>
              <li>
                <a href='#products'>Продукти1 </a>
              </li>
              <li>
                <a href='#contact'>Контакти 1 </a>
              </li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
          <a href='#services'>Послуги</a>
          {isMenuVisible2 && (
            <ul>
              <li>
                <a href='#products'>Продукти1 </a>
              </li>
              <li>
                <a href='#contact'>Контакти 1 </a>
              </li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
          <a href='#products'>Продукти</a>
          {isMenuVisible3 && (
            <ul>
              <li>
                <a href='#products'>Продукти1 </a>
              </li>
              <li>
                <a href='#contact'>Контакти 1 </a>
              </li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
          <a href='#contact'>Контакти</a>
          {isMenuVisible4 && (
            <ul>
              <li>
                <a href='#products'>Продукти1 </a>
              </li>
              <li>
                <a href='#contact'>Контакти 1 </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default Button;

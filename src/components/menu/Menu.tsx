import styles from './menu.module.scss';

const Menu = () => {
  return (
    <>
      <ul className={`${styles.active} ${styles.flex}`}>
        <li className={styles.item}>
          <a href='#'>Студия</a>
        </li>
        <li className={styles.item}>
          <a href='#'>Портфолио</a>
        </li>
        <li className={styles.item}>
          <a href='#'>Контакты</a>
        </li>
      </ul>
    </>
  );
};

export default Menu;

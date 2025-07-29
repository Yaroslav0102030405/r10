import styles from './menu.module.scss';

const Menu = () => {
  return (
    <>
      <ul className={styles.active}>
        <li>
          <a href='#'>Студия</a>
        </li>
        <li>
          <a href='#'>Портфолио</a>
        </li>
        <li>
          <a href='#'>Контакты</a>
        </li>
      </ul>
    </>
  );
};

export default Menu;

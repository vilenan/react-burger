import styles from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <Logo className={styles.logo} />
      <nav className={styles.menu}>
        <div className={styles.menuItem}>
          <BurgerIcon type="primary" />
          <span className="text text_type_main-default">Конструктор</span>
        </div>
        <div className={styles.menuItem}>
          <ListIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
        </div>
        <div className={styles.menuItem}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
        </div>
      </nav>

    </header>
  );
}

export default AppHeader;
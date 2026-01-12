import './AppHeader.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className="app-header pt-4 pb-4">
      <Logo className='app-header-logo'/>
      <nav className='app-header-menu'>
        <div className='app-header-menu-item'>
          <BurgerIcon type="primary" /> 
          <span>Конструктор</span>
        </div>
         <div className='app-header-menu-item'>
          <ListIcon type="primary" />
           <span>Лента заказов</span>
        </div>
         <div className='app-header-menu-item'>
          <ProfileIcon type="primary" />
          <span>Личный кабинет</span>
        </div>
      </nav>
       
    </header>
  );
}

export default AppHeader;
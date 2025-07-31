import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import Contacts from '../contacts/Contacts';

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='flex'>
          <Logo />
          <Menu />
          <Contacts />
        </nav>
      </header>
    </>
  );
};

export default Header;

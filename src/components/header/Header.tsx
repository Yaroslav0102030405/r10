import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import Contacts from '../contacts/Contacts';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Logo />
          <Menu />
          <Contacts />
        </nav>
      </header>
    </>
  );
};

export default Header;

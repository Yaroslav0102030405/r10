import IconMail from '../../assets/icons/mail.svg?no-inline';
import IconTell from '../../assets/icons/tell.svg?no-inline';

const Contacts = () => {
  return (
    <>
      <ul>
        <li>
          <svg width='14' height='10'>
            <use href={IconMail}></use>
          </svg>
          <a href='mailto:info@devstudio.com'>info@devstudio.com</a>
        </li>
        <li>
          <svg width='10' height='14'>
            <use href={IconTell}></use>
          </svg>
          <a href='tel:+380961111111'>+38 096 111 11 11</a>
        </li>
      </ul>
    </>
  );
};

export default Contacts;

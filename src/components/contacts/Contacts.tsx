import IconMail from '../../assets/icons/mail.svg?no-inline';
import IconTell from '../../assets/icons/tell.svg?no-inline';

const Contacts = () => {
  return (
    <>
      <ul>
        <li>
          <a href='mailto:info@devstudio.com'>
            <svg width='14' height='10'>
              <use href={IconMail}></use>
            </svg>
            info@devstudio.com
          </a>
        </li>
        <li>
          <a href='tel:+380961111111'>
            <svg width='10' height='14'>
              <use href={IconTell}></use>
            </svg>
            +38 096 111 11 11
          </a>
        </li>
      </ul>
    </>
  );
};

export default Contacts;

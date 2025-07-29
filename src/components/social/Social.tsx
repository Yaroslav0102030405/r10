// import iconFacebook from './facebook.svg?no-inline';
// import iconInsta from './insta.svg?no-inline';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Social = () => {
  return (
    <>
      <ul>
        <li>
          {/* <svg width='40' height='40'>
            <use href={<FaInstagram />}></use>
          </svg> */}
          <FaInstagram />
        </li>
        <li>
          {/* <svg width='40' height='40'>
            <use href={iconInsta}></use>
          </svg> */}
          <FaFacebook />
        </li>
      </ul>
    </>
  );
};

export default Social;

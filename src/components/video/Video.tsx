// працюющий варіант
// const Video = () => {
//   return (
//     <>
//       <iframe
//         width='560'
//         height='315'
//         src='https://www.youtube.com/embed/LmDsOGdm06Y?si=b8ShvMmWC0pKz0vK'
//         title='YouTube video player'
//         // frameborder='0'
//         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//         referrerPolicy='strict-origin-when-cross-origin'
//         allowFullScreen
//       ></iframe>
//     </>
//   );
// };

// export default Video;

import styles from './video.module.scss';
// новий варіант
// --- Типізація пропсів для компонента Video ---
interface VideoProps {
  width?: string | number; // Необов'язкова ширина відео
  height?: string | number; // Необов'язкова висота відео
  title?: string; // Необов'язковий заголовок iframe
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  src: string;
  allow: string;
  //   allowFullScreen?: boolean;
}

// Компонент Video, який тепер приймає пропси типу VideoProps
const Video: React.FC<VideoProps> = ({
  // Деструктуруємо пропси, встановлюючи значення за замовчуванням
  width,
  height,
  title,
  allow,
  src,
  referrerPolicy,
}) => {
  return (
    <>
      <h2 className={styles.active}>&copy; Мнемокод</h2>
      <iframe
        width={width}
        height={height}
        src={src} // Використовуємо динамічно сформований URL
        title={title}
        allow={allow}
        referrerPolicy={referrerPolicy} // Передаємо значення з пропсів
      ></iframe>
    </>
  );
};

export default Video;

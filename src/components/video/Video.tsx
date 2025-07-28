// Типізація пропсів компонента Video
interface VideoProps {
  width?: string | number;
  height?: string | number;
  title?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  className?: string;
}

const Video = ({
  width = 560,
  height = 315,
  title = 'YouTube video player',
  autoPlay = false,
  controls = true,
  loop = false,
  className = '',
}: VideoProps) => {
  // *** Використовуємо ID відео з наданого iframe коду ***
  const hardcodedVideoId = 'a_04N0N0K0M';

  // Формуємо URL для вбудовування відео
  // Базовий URL 'https://www.youtube.com/embed/' є коректним.
  const videoSrc = `https://www.youtube.com/embed/{hardcodedVideoId}?enablejsapi=1${
    autoPlay ? '&autoplay=1' : ''
  }${controls ? '' : '&controls=0'}${
    loop ? `&loop=1&playlist=${hardcodedVideoId}` : ''
  }`;

  return (
    <>
      <div className={`youtube-embed-container ${className}`}>
        <iframe
          width={width}
          height={height}
          src={videoSrc}
          title={title}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Video;

import Image1 from './sevise-1.jpg'; // Adjust paths as needed
import Image2 from './service-2.jpg';
import Image3 from './service-3.jpg';

interface ServiceImage {
  id: number;
  src: string;
  alt: string;
}

const serviceImages: ServiceImage[] = [
  { id: 1, src: Image1, alt: 'Service 1 Description' },
  { id: 2, src: Image2, alt: 'Service 2 Description' },
  { id: 3, src: Image3, alt: 'Service 3 Description' },
];

const Sevices = () => {
  return (
    <>
      <ul className='flex'>
        {serviceImages.map((image: ServiceImage) => (
          <li key={image.id}>
            <div className='thumb'>
              <img width='370' src={image.src} alt={image.alt} />
              <div className='th-2'>
                <p>lfddddddddddddddddddddddddddd</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sevices;

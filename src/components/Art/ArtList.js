import Art from './Art';
import styles from './ArtList.module.css';

const data = [
  {
    id: 'noodles',
    image:
      'https://images.pexels.com/photos/5602421/pexels-photo-5602421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'happy',
    description: 'makes you feel good',
    price: 50.0,
  },
  {
    id: 'car',
    image:
      'https://cdn.pixabay.com/photo/2012/06/25/15/34/berlin-wall-50727__340.jpg',
    title: 'sad',
    description: 'makes you feel terrible',
    price: 30.2,
  },
  {
    id: 'fade',
    image:
      'https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'exited',
    description: 'look forward to',
    price: 20.9,
  },
  {
    id: 'hand',
    image:
      'https://images.pexels.com/photos/2927596/pexels-photo-2927596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'love',
    description: 'priceless',
    price: 85.0,
  },
  {
    id: 'kids',
    image:
      'https://images.pexels.com/photos/4551851/pexels-photo-4551851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'love',
    description: 'priceless',
    price: 100.0,
  },
  {
    id: 'peek',
    image:
      'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'love',
    description: 'priceless',
    price: 75.0,
  },
  {
    id: 'sea',
    image:
      'https://images.pexels.com/photos/4592249/pexels-photo-4592249.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'sea',
    description: 'priceless',
    price: 40.2,
  },
  {
    id: 'skate',
    image:
      'https://images.pexels.com/photos/6558316/pexels-photo-6558316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'love',
    description: 'priceless',
    price: 72.0,
  },
];

const ArtList = () => {
  return (
    <section className={styles.art}>
      {data.map((art) => (
        <Art
          key={art.id}
          id={art.id}
          title={art.title}
          image={art.image}
          description={art.description}
          price={art.price}
        />
      ))}
    </section>
  );
};

export default ArtList;

import styles from '../Styles/Card.module.css';
import { SingleItem } from '../Interface/DataTypes';
import { Card } from './Card.tsx';

interface CardItems {
  firstIndex: number;
  data: SingleItem[];
}

const Cards = ({ firstIndex, data }: CardItems) => {
  if (!Array.isArray(data)) {
    return <p>Data is not an array</p>;
  }
  return (
    <div className={styles.card__wrapper}>
      {data.map((item, index) => (
        <Card
          key={index + firstIndex}
          firstIndex={firstIndex + index}
          data={item}
          uuid={item.uuid}
        />
      ))}
    </div>
  );
};

export default Cards;

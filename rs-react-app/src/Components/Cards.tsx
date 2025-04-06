import styles from '../Styles/Card.module.css';
import { CardItem } from '../Interface/DataTypes';
import { Card } from './Card.tsx';

const Cards = ({ firstIndex, data }: CardItem) => {
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
          itemIndex={index + firstIndex}
        />
      ))}
    </div>
  );
};

export default Cards;

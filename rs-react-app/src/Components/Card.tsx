import styles from '../Styles/Card.module.css';
import { CardProps } from '../Interface/DataTypes';
import { useTheme } from '../Providers/ThemeContext';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { toggleCard } from '../features/counter/counter-slice';

export const Card = ({ firstIndex, data, itemIndex }: CardProps) => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const firstFiveEntries = Object.entries(data).slice(0, 7);
  const selectedCards = useAppSelector(
    (state) => state.selectedCards.selectedCards
  );
  const isChecked = selectedCards.some((card) => card.itemIndex === itemIndex);
  return (
    <div className={styles.card}>
      <div
        className={`${styles.checkbox__wrapper} ${theme === 'light' ? 'light' : ''}`}
      >
        <input
          className={styles.card__checkbox}
          type="checkbox"
          name={String(firstIndex)}
          id={String(firstIndex)}
          checked={isChecked}
          onChange={() => dispatch(toggleCard({ itemIndex, data, firstIndex }))}
        />
      </div>
      <h3
        className={`${styles.card__title} ${theme === 'light' ? 'light' : ''}`}
      >
        Карточка №{Number(firstIndex) + 1}
      </h3>
      <div className="fields">
        {firstFiveEntries.map(([key, value]) => (
          <div key={key} className={styles.data__wrapper}>
            <span className="data__name">{key}:</span>
            <span className="data__name">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

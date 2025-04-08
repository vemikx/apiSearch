import { useAppDispatch, useAppSelector } from '../app/hook';
import { clearStore } from '../features/counter/counter-slice';
import styles from '../Styles/SavePanel.module.css';
import { saveData } from '../features/saveData';
import { CardItem } from '../Interface/DataTypes';
interface SavePanelProps {
  amount: number;
}
function SavePanel({ amount }: SavePanelProps) {
  const dispatch = useAppDispatch();
  const selectedCards: CardItem[] = useAppSelector(
    (state) => state.selectedCards.selectedCards
  );
  const handleSave = () => {
    saveData(selectedCards, 'selected_cards.json');
  };
  return (
    <div className={styles.control}>
      <div className={styles.control__wrapper}>
        <span className={styles.control__amount}>
          Колличество карточек в хранилище {amount}
        </span>
        <div className={styles.btn__wrapper}>
          <button className={styles.control__btn} onClick={handleSave}>
            Сохранить
          </button>
          <button
            className={styles.control__btn}
            onClick={() => dispatch(clearStore())}
          >
            Очистить хранилище
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavePanel;

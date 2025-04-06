import Cards from './Cards';
import { Pagination } from './Pagination';
import SavePanel from './SavePanel';
import styles from '../Styles/Main.module.css';
import { SwapiResponseUnion, SingleItem } from '../Interface/DataTypes';
import { useState } from 'react';
import { useTheme } from '../Providers/ThemeContext';
import { useAppDispatch } from '../app/hook';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

interface MainProps {
  data: SwapiResponseUnion | null;
}

const Main = ({ data }: MainProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(4);
  const { theme } = useTheme();
  const hasCards = useSelector(
    (state: RootState) => state.selectedCards.hasCards
  );
  const selectedCards = useSelector(
    (state: RootState) => state.selectedCards.selectedCards
  );

  if (!data) {
    return <p className={`${theme === 'light' ? 'light' : 'dark'}`}>No Data</p>;
  }
  if (!Array.isArray(data.results)) {
    return <p>Data is not an array</p>;
  }
  const resultsData = data.results as SingleItem[];
  const lastCardIndex = cardPerPage * currentPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentCardsData = resultsData.slice(firstCardIndex, lastCardIndex);
  return (
    <div
      className={`${styles.container} ${theme === 'dark' ? 'dark' : 'light'}`}
    >
      <div className={styles.data__wrapper}>
        <Cards firstIndex={firstCardIndex} data={currentCardsData} />
        <Pagination
          totalCards={resultsData.length}
          cardsPerPage={cardPerPage}
          setCurrentPage={setCurrentPage}
          сurrentPage={currentPage}
        />
        {hasCards && <SavePanel amount={selectedCards.length} />}
      </div>
    </div>
  );
};

export default Main;

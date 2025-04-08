import styles from '../Styles/Pagination.module.css';
import { useTheme } from '../Providers/ThemeContext';

interface PaginationProps {
  totalCards: number;
  cardsPerPage: number;
  setCurrentPage: (page: number) => void;
  сurrentPage: number;
}

export const Pagination = ({
  totalCards,
  cardsPerPage,
  setCurrentPage,
  сurrentPage,
}: PaginationProps) => {
  const { theme } = useTheme();
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className={styles.pagination__wrapper}>
      {pages.map((page, index) => (
        <button
          className={`${styles.pagination__btn} 
            ${index === сurrentPage - 1 ? styles.active : ''}
            ${theme === 'light' ? styles.light : ''}`}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

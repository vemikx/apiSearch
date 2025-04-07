import styles from '../Styles/SearchButton.module.css';

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <div>
      <button onClick={onClick} className={styles.search__btn}>
        Find
      </button>
    </div>
  );
};

export default SearchButton;

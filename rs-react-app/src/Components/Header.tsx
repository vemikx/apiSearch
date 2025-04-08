import { useState } from 'react';
import Search from './Search';
import Themes from './Themes';
import SearchButton from './SearchButton';
import styles from '../Styles/Header.module.css';
import { SwapiResponseUnion } from '../Interface/DataTypes';
import { useTheme } from '../Providers/ThemeContext';
interface HeaderProps {
  onDataUpdate: (data: SwapiResponseUnion) => void;
}
const Header = ({ onDataUpdate }: HeaderProps) => {
  const [inputData, setData] = useState(() => {
    const savedQuery = localStorage.getItem('searchQuery') || '';
    return { searchQuery: savedQuery };
  });
  const { theme } = useTheme();
  const handleSearchChange = (newQuery: string) => {
    setData((prevData) => ({ ...prevData, searchQuery: newQuery }));
  };

  const handleSearchClick = async () => {
    localStorage.setItem('searchQuery', inputData.searchQuery);
    try {
      const response = await fetch(
        `https://swapi.dev/api/${inputData.searchQuery}`
      );
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      onDataUpdate(result);
    } catch (error: any) {
      setData((prevData) => ({
        ...prevData,
        error: error.message,
        result: null,
      }));
    }
  };

  return (
    <div>
      <div className={styles.title__wrapper}>
        <h1 className={`${styles.title} ${theme}`}>Поиск по API</h1>
        <Themes />
      </div>

      <div className={styles.search__wrapper}>
        <div className={styles.search__container}>
          <Search value={inputData.searchQuery} onSearch={handleSearchChange} />
          <SearchButton onClick={handleSearchClick} />
        </div>
        <div className={styles.search__hint}>
          <span>
            Поиск доступен по следующим ключевым словам: people, planets,
            species, vehicles, starships
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

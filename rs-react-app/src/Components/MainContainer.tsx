import React, { ReactNode } from 'react';
import styles from '../Styles/Main.module.css';
import { useTheme } from '../Providers/ThemeContext';

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark}`}
    >
      {children} {/* Отображаем переданные дочерние элементы */}
    </div>
  );
};

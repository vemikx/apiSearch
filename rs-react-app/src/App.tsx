import { SetStateAction, useState } from 'react';
import { ThemeProvider } from './Providers/ThemeProvider';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { SwapiResponseUnion } from './Interface/DataTypes';
import ErrorBoundary from './Components/ErrorBoundary';
import { MainContainer } from './Components/MainContainer';

function App() {
  const [data, setData] = useState<SwapiResponseUnion | null>(null);

  const handleDataUpdate = (
    newData: SetStateAction<SwapiResponseUnion | null>
  ) => {
    setData(newData);
  };
  return (
    <ErrorBoundary>
      <MainContainer>
        <Header onDataUpdate={handleDataUpdate} />
        <Main data={data} />
      </MainContainer>
    </ErrorBoundary>
  );
}

export default App;

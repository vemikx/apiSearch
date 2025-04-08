import { CardItem } from '../Interface/DataTypes';

export const saveData = (data: CardItem[], filename: string) => {
  const jsonContent = JSON.stringify(data, null, 2);

  const blob = new Blob([jsonContent], {
    type: 'application/json;charset=utf-8;',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  link.click();
};

// src/data/altshullerMatrix.ts
import { RAW_MATRIX_BLOB } from './matrixBlob';

const parseMatrix = (): Record<string, number[]> => {
  const matrix: Record<string, number[]> = {};
  const cells = RAW_MATRIX_BLOB.split(';');
  
  let cellIdx = 0;
  // Ітэруем па стандартнай сетцы 39x39
  for (let i = 1; i <= 39; i++) {
    for (let j = 1; j <= 39; j++) {
      if (i === j) continue; // Прапускаем дыяганаль (фізічная супярэчнасць)
      
      const data = cells[cellIdx];
      // Калі ў ячэйцы не 0 і не пуста — дадаем у аб'ект
      if (data && data !== "0" && data !== "") {
        matrix[`${i}-${j}`] = data.split(',').map(Number);
      }
      cellIdx++;
    }
  }
  return matrix;
};

// Экспартуем ужо гатовы вынік
export const ALTSHULLER_MATRIX = parseMatrix();
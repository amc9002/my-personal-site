import { useTranslation } from 'react-i18next';
import TechnicalCase from './TechnicalCase/TechnicalCase';
import { useEffect, useState } from 'react';
import type { CaseItem } from '../../types/case';


  // Спіс ID кейсаў (можна потым вынесці ў асобны канфіг-файл)
const caseIds = ['001', ]; 

const TechnicalCases = () => {
  const { i18n } = useTranslation();
  const [cases, setCases] = useState<CaseItem[]>([]);
  
  useEffect(() => {
    const loadCases = async () => {
      const loadedCases = await Promise.all(
        caseIds.map(async (id) => {
          try {
            // Шлях будуецца дынамічна: мова + id
            const response = await fetch(`/locales/${i18n.language}/cases/${id}.json`);
            return await response.json();
          } catch (e) {
            console.error(`Памылка загрузкі кейса ${id}:`, e);
            return null;
          }
        })
      );
      setCases(loadedCases.filter((c): c is CaseItem => c !== null));
    };

    loadCases();
  }, [i18n.language]); // Перазагружаем, калі змянілася мова

  return (
    <main>
      {cases.map((c, index) => (
        <TechnicalCase key={c.id || index} {...c} />
      ))}
    </main>
  );
};

export default TechnicalCases;
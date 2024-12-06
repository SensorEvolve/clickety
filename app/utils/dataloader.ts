import Papa from 'papaparse';
import { Switch } from '../types';

export async function loadSwitchData(): Promise<Switch[]> {
  try {
    const fileContent = await window.fs.readFile('assets/products.csv', { encoding: 'utf8' });
    
    const result = Papa.parse(fileContent, {
      header: true,
      delimiter: ';',
      skipEmptyLines: true,
      dynamicTyping: true
    });

    return result.data as Switch[];
  } catch (error) {
    console.error('Error loading switch data:', error);
    return [];
  }
}
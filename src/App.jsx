import { useContext } from 'react';

import { Intro } from './components/Intro';
import { About } from './components/About';
import { ProductList } from './components/ProductList';
import { Contact } from './components/Contact';
import { Toggle } from './components/Toggle';

import { ThemeContext } from './context';

export function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

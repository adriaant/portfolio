import React from 'react';
import Flexbox from 'flexbox-react';
import CountryList from './CountryList';
import ContactList from './ContactList';
import ToolList from './ToolList';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <Flexbox flexDirection="column" minHeight="100vh">

      <Flexbox element="header" justifyContent="center" alignItems="center">
        <Header />
      </Flexbox>

      <Flexbox className="container" flexDirection="column" flexGrow={1} alignSelf="center" flexWrap="nowrap">
        <div>
          <hr/>
          <p>
            Hi, I am Adriaan Tijsseling. Husband and father. Cognitive scientist turned senior software engineer. Full stack integrator. Dutch. Motorcyclist.
          </p><p>
            To pronounce my obscure last name: The 'ij' is like 'y' in 'why' and the 'e' is slightly silent as in 'coder'.
          </p>
        </div>
        <ContactList />
        <ToolList />
        <CountryList />
      </Flexbox>

      <Flexbox element="footer" height="42px" justifyContent="flex-start">
        <Footer />
      </Flexbox>

    </Flexbox>
  );
}

export default App;

import { createContext, useState } from 'react';

export const PrenomContext = createContext();

export function PrenomProvider({ children }) {
  const [prenom, setPrenom] = useState('Jean');
  const context = {prenom, setPrenom};
  return (
    <PrenomContext.Provider value={context}>
      {children}
    </PrenomContext.Provider>
  );
}

import { createContext } from 'react';

export const stateContext = createContext(null);

const Provider = stateContext.Provider;

export default Provider;
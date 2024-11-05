/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import { reducer } from '../lib/reducer';
import { initialState } from '../lib/initialState';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

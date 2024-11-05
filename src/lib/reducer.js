export const ActionTypes = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    SET_FILTER: 'SET_FILTER',
    SET_SORT: 'SET_SORT',
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.SET_PRODUCTS:
        return { ...state, products: action.payload };
      case ActionTypes.SET_FILTER:
        return { ...state, filters: { ...state.filters, ...action.payload } };
      case ActionTypes.SET_SORT:
        return { ...state, sortBy: action.payload };
      default:
        return state;
    }
  };
  
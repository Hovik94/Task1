import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { ActionTypes } from "../lib/reducer";

const SortOptions = () => {
  const { dispatch } = useContext(FilterContext);

  return (
    <select
      onChange={(e) =>
        dispatch({ type: ActionTypes.SET_SORT, payload: e.target.value })
      }
    >
      <option value="popularity">Popularity</option>
      <option value="price">Price</option>
      <option value="rating">Rating</option>
    </select>
  );
};

export default SortOptions;

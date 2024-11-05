/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { ActionTypes } from "../lib/reducer";
const FilterPanel = () => {
  const { state, dispatch } = useContext(FilterContext);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const setFilter = (filter) => {
    dispatch({ type: ActionTypes.SET_FILTER, payload: filter });
  };

  return (
    <>
      <button
        className="filter-toggle-btn"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
      >
        {isPanelOpen ? "Hide Filters" : "Show Filters"}
      </button>

      <div className={`filter-panel ${isPanelOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setIsPanelOpen(false)}>
          ×
        </button>
        <h3>Filters</h3>
        <select onChange={(e) => setFilter({ category: e.target.value })}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Apparel">Apparel</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
    </>
  );
};

export default FilterPanel;

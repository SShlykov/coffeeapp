import React from "react";
import Search from "./Seach";
import Filter from "./Filter";

const FilterPanel = ({onSearchChange, onFilterChange, filter}) => {
        return(
            <>
                <div className="row">
                    <div className="col-lg-4 offset-lg-2">
                        <Search onSearchChange={onSearchChange}/>
                    </div>
                    <div className="col-lg-4">
                        <Filter onFilterChange={onFilterChange} filter={filter}/>
                    </div>
                </div>
            </>
        )
};
export default FilterPanel;
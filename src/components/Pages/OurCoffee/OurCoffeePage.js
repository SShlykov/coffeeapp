import React from "react";
import Title from "./Title";
import FilterPanel from "../../FilterPanel";
import Items from "../../Items";

const OurCoffeePage = ({data, filter, onFilterChange, onSearchChange }) => {
    return(
        <section className="shop">
            <div className="container">
                <Title/>
                <FilterPanel onSearchChange={onSearchChange} filter={filter} onFilterChange={onFilterChange}/>
                <Items data={data}/>
            </div>
        </section>
    )
};

export default OurCoffeePage;
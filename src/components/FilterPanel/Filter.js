import React, {Component} from "react";

export default class Filter extends Component {
    buttons = [
        {name: "Brazil"},
        {name: "Kenya"},
        {name: "Columbia"},
    ];
    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name}) => {
            const isActive = filter === name;
            return(
                <button
                    key={name}
                    className="shop__filter-btn"
                    onClick={()=> onFilterChange(name)}
                >
                    {name}
                </button>
            )
        });
        return(
            <div className="shop__filter">
                <div className="shop__filter-label">
                    Or filter
                </div>
                <div className="shop__filter-group">
                    {buttons}
                </div>
            </div>
        )
    }
}
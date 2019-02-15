import React, {Component} from "react";

export default class Filter extends Component {
    state = {
        buttons: [
            {name: "Brazil"},
            {name: "Kenya"},
            {name: "Columbia"},
        ]
    }
    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.state.buttons.map(({name}) => {
            const isActive = filter === name;
            const clazzName = isActive? "shop__filter-btn active": "shop__filter-btn";
            return(
                <button
                    key={name}
                    className={clazzName}
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
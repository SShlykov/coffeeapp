import React, {Component} from "react";
import girl from "./img/coffee_girl.jpg"
import Item,{ BeansLogo} from "../../SmallComp"

export default class OurCoffee extends Component {
    state = {
      term: ""
    };
    onType = e => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };
    render() {
        const items = this.props.data.map(item => {
            const {id, name, weight, country, price, imgSrc, url} = item;
            return <Item key={id} id={id} name={name} weight={weight} country={country} price={price} imgSrc={imgSrc||url}/>
        });
        return (
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src={girl} alt="girl"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <BeansLogo dark/>
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/><br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                so questions. <br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="row">
                        <div className="col-lg-4 offset-lg-2">
                            <label className="shop__search-label" htmlFor="filter">Looking for</label>
                            <input
                                id="filter"
                                type="text"
                                placeholder="start typing here..."
                                className="shop__search-input"
                                value={this.state.term}
                                onChange={this.onType}
                            />
                        </div>
                        <div className="col-lg-4">
                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>
                                <div className="shop__filter-group">
                                    <button className="shop__filter-btn">Brazil</button>
                                    <button className="shop__filter-btn">Kenya</button>
                                    <button className="shop__filter-btn">Columbia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="shop__wrapper">
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};
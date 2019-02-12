import React, {Component} from "react";
import Item, {BeansLogo} from "../../SmallComp";

const MainPage = ({data}) => {
        const items = data.map(item=>{
            const {id, type="best", name, weight, price, imgSrc} = item;
            return <Item key={id} id={id} type={type} name={name} weight={weight} price={price} imgSrc={imgSrc}/>
        });
        return(
            <>
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="title">About Us</div>
                                <BeansLogo dark/>
                                <div className="about__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of
                                    as landlord horrible. Afraid at highly months do things on at.
                                    Situation recommend objection do intention so questions. As
                                    greatly removed calling pleased improve an. Last ask him cold
                                    feel met spot shy want. Children me laughing we prospect
                                    answered followed. At it went is song that held help face.
                                    <br />
                                    <br />
                                    Now residence dashwoods she excellent you. Shade being under
                                    his bed her, Much read on as draw. Blessing for ignorant
                                    exercise any yourself unpacked. Pleasant horrible but confined
                                    day end marriage. Eagerness furniture set preserved far
                                    recommend. Did even but nor are most gave hope. Secure active
                                    living depend son repair day ladies now.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="best">
                    <div className="container">
                        <div className="title">Our best</div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="best__wrapper">
                                    {items}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
};
export default MainPage;
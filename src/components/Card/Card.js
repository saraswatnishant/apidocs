import React from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {
    let { description, title, links, icon} = props;
    return (
        <div className="card">
            <div className="card__head">
                <i className={icon} aria-hidden="true"></i>
                <h2>{title}</h2>
            </div>
            <div className="card__descrptn">
                <p>
                    {description}
                </p>
            </div>
            <div className="card__footr">
                {
                    links.map((item, key) =>{
                        return (
                            <Link to={item.url} key = {key} className="card__footr--link">{item.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card;
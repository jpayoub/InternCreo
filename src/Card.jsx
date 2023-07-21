import React from "react";
import "./Card.css"

export const Card = ({ data }) => {


   const{ imgSrc, title, pricing, desc1, desc2, desc3, desc4, btnLink } = data;



return (

    <div className="card">

        {imgSrc && <img className="card-img" src={imgSrc} alt="Card Image"/>}

        {title && <p className="card-title">{title}</p>}
        {pricing && <p className="card-pricing">{pricing}</p>}
        {desc1 && <p className="card-desc">{desc1}</p>}
        {desc2 && <p className="card-desc">{desc2}</p>}
        {desc3 && <p className="card-desc">{desc3}</p>}
        {desc4 &&<p className="card-desc">{desc4}</p>}
        {btnLink && <button href={btnLink} className="card-btn">Buy Now</button>}

        

    </div>
);

};


export default Card;
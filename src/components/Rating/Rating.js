import React from 'react'
import starYellow from '../../images/staryellow.png'
import starBlack from '../../images/starblack.png'

function Rating(props) {

    const fiveStar = (
        <React.Fragment>
            <img className="star" src={starYellow} alt="yellow" />
            <img className="star" src={starYellow} alt="yellow" />
            <img className="star" src={starYellow} alt="yellow" />
            <img className="star" src={starYellow} alt="yellow" />
            <img className="star" src={starYellow} alt="yellow" />
        </React.Fragment>
    )
    
    const fourStar = (
        <React.Fragment>
            <img className="star" src={starYellow} alt="yellow" />
            <img className="star" src={starYellow} alt="yellow" />
            <img className="star" src={starYellow} alt="yellow" />
            <img className="star" src={starYellow} alt="yellow" />
            <img className="star" src={starBlack} alt="black" />
        </React.Fragment>
    )

    const ratings =  props.data.map(data => {
        let star = null;
        if(data.rating === 5)
            star = fiveStar
        if(data.rating === 4)
            star = fourStar
        return (
            <div className="row rating-container">
                <div className="col-lg-1 ml2">{data.name}</div>
                <div className="col-lg-6">
                    {star}
                </div>
            </div>
        )
    })

    return (
        <React.Fragment>
            {ratings}
        </React.Fragment>
    )
}

export default Rating

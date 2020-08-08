import React from 'react'

const Card = (props) => {
    const {id , heading , ul} = props
    const list = ul.map((li , i) =>{
        return <li key={i}>{li}</li>
    })
    return (
        <div className="card">
            <div className="card__side card__side--front ">
                <div className={`card__picture card__picture--${id}`}>
                            </div>
                            <h4 className="card__heading ">
                                <span className={`card__heading-span card__heading-span--${id}`}>
                                   {heading}
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    {list}
                                </ul>
                            </div>
                        </div>
                        <div className={`card__side card__side--back card__side--back--${id}`}>
                            <div className="card__cta">
                                <a href="#popup" className="btn btn--white">Contact now!</a>
                            </div>
                        </div>
                    </div>
    )
}

export default Card

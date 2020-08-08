import React, { useState } from 'react'
import Card from '../../card/Card'
const About = () => {
    const [firstCardList] = useState([
        { id: 1, heading: `REACT.JS`, ul: ['Best Performance', 'Super Realiable', 'Made By Facebook', 'Scalable', 'Level: Advance'] },
        { id: 2, heading: `HTML5 CSS3`, ul: ['The Basic Off All Websites', 'The Standard', 'SEO Perfection', 'Level: Advance'] },
        { id: 3, heading: `Java Script`, ul: ['Object Oriented Programming', 'Light Weighted', 'Client Side', 'Level: Advance'] },
    ])
    const [secondCardList] = useState([
        { id: 4, heading: `SASS`, ul: ['Best Performance', 'Super Realiable', 'Made By Facebook', 'Scalable', 'Level: Advance'] },
        { id: 5, heading: `REDUX`, ul: ['The Basic Off All Websites', 'The Standard', 'SEO Perfection', 'Level: Advance'] },
        { id: 6, heading: `OOP`, ul: ['Object Oriented Programming', 'Light Weighted', 'Client Side', 'Level: Advance'] },
    ])

    const upperList = firstCardList.map((card, i) => {
        return (
            <div className="col-1-of-3" key={i}>
                <Card id={firstCardList[i].id} heading={firstCardList[i].heading} ul={firstCardList[i].ul} />
            </div>
        )
    })

    const lowerList = secondCardList.map((card, i) => {
        return (
            <div className="col-1-of-3" key={i}>
                <Card id={secondCardList[i].id} heading={secondCardList[i].heading} ul={secondCardList[i].ul} />
            </div>
        )
    })
    return (
        <div className="section-about" id="about">
            <h2 className="section-about__headline">Front-End developer</h2>
            <div className="row">
                {upperList}
            </div>
            <div className="row">
                {lowerList}
            </div>
        </div>
    )
}

export default About

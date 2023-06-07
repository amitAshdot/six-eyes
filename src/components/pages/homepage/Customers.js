import React from 'react'
import bshvilLogo from '../../../images/bshvil-logo.png'
import targetLogo from '../../../images/targetcall-logo.svg'
import eventDoLogo from '../../../images/eventdo-logo.png'

import shvilVideo from '../../../videos/bshvil.mp4'
import shvilVideoweb from '../../../videos/bshvil.webm'
const Customers = () => {
    return (
        <section className='customers-section'>
            <h2>בין לקוחותי</h2>
            <div className="customers-container">
                <div className="customers__item col-1-of-3">
                    <a href="https://www.senior.co.il/" target="_blank" rel="noopener noreferrer" className="customers__item__btn btn">
                        <img src={bshvilLogo} alt="בשביל הזהב" className="customers__item__image" />
                        <h2>בשביל הזהב</h2>
                        <p className='customers__item__text'>מערכת שליחת כרטיסים אוטומטית, שליחת וואטסאפ, מיילים ומסרונים לנייד</p>
                        {/* <p className='customers__item__text אןמט'>*האתר המוצג כאן אינו שלי, המערכת שלי הינה פרטית ואין אישור לחשוף</p> */}
                        {/* <video controls autoPlay> */}
                        {/* <source src={shvilVideoweb} type="video/webm" /> */}
                        {/* <source src={shvilVideo} type="video/mp4" /> */}
                        {/* </video> */}
                    </a>
                </div>

                <div className="customers__item col-1-of-3">
                    <a href="https://targetcall.co.il/" target="_blank" rel="noopener noreferrer" className="customers__item__btn btn">
                        <img src={targetLogo} alt="טרגטקול" className="customers__item__image" />
                        <h2>טרגטקול</h2>
                        <p className='customers__item__text'>יצירת עמודי נחיתה לפרטנר, 012, גלובס, הטרגטקול עצמם </p>
                    </a>
                </div>

                <div className="customers__item col-1-of-3">
                    <a href="https://event-do.com/" target="_blank" rel="noopener noreferrer" className="customers__item__btn btn">
                        <img src={eventDoLogo} alt="איוונטדו" className="customers__item__image" />
                        <h2>איוונטדו</h2>
                        <p className='customers__item__text'>מערכת לינהול אירועים, מעקב אחר תקציב, בחיקת ספקים וסגירת חוזים</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Customers
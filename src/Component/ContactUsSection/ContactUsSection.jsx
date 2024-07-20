import React from 'react'
import styles from './contactUsSection.module.scss'
import ContactImage from '../../assets/contact.png'
const ContactUsSection = () => {
  return (
    <div className={styles?.contactUsSection}>
        <div className={`container ${styles?.contentContainer}`}>
            <div className={styles?.image}>
                <img src={ContactImage} alt="" />
            </div>
            <h2 className={styles?.heading}>Bize Ulaşın</h2>
            <p className={styles?.subHeading}>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</p>
            <button className={styles?.button}> Bize Ulaşın</button>
        </div> 
    </div>
  )
}

export default ContactUsSection
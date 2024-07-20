import React from 'react'
import styles from './brandSection.module.scss'
import Brand1 from '../../assets/brands/brand_1.png'


const BrandCard = () => {
    return (
        <div className={styles?.brandCard}>
           <img src={Brand1} alt="" />
        </div>
    )
}
const BrandSection = () => {
    return (
        <section className={styles?.brandSection}>
            <div className="container">
                <h2 className={styles?.heading}>Referanslarımız</h2>
                <p className={styles?.subHeading}>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
                <div className={styles?.brandImageContainer}>
                    <div className={styles?.brandRow}>
                        <BrandCard />
                       
                    </div>
                    <div className={styles?.brandRow}> 
                        <BrandCard />
                        <BrandCard />
                       
                        </div>
                    <div className={styles?.brandRow}>
                        <BrandCard />
                        <BrandCard />
                        <BrandCard />

                    </div>
                    <div className={styles?.brandRow}>
                        <BrandCard />
                        <BrandCard />
                       

                    </div>
                    <div className={styles?.brandRow}>
                        <BrandCard />
                       

                    </div>

                </div>
            </div>
        </section>
    )
}

export default BrandSection
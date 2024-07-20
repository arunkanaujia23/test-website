import React from 'react'
import styles from './statsSection.module.scss'



const ArrowIcon = () => {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4_326)">
                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 20L15 16L11 12" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 20L22 16L18 12" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_4_326">
                    <rect width={32} height={32} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
const StatsSection = () => {
    return (
        <section className={styles?.statsSectionContainer}>
            <div className='container'>
                <div className={styles?.textContainer}>
                    <h2 className={styles?.heading}>Test Yönetimiyle Neler Sağlıyoruz?</h2>
                    <p className={styles?.subHeading}>IoT Destekli Çözümler</p>
                </div>

                <div className={styles?.statsContainer}>
                    <p className={styles?.stats}>Yazılım Kalitesini
                        Arttırıyoruz</p>
                    <div className={styles?.statsIcon}>
                        <ArrowIcon />
                    </div>
                    <p className={styles?.stats}>Yazılım Kalitesini
                        Arttırıyoruz</p>
                    <div className={styles?.statsIcon}>
                        <ArrowIcon />
                    </div>
                    <p className={styles?.stats}>Yazılım Kalitesini
                        Arttırıyoruz</p>
                    <div className={styles?.statsIcon}>
                        <ArrowIcon />
                    </div>
                    <p className={styles?.stats}>Yazılım Kalitesini
                        Arttırıyoruz</p>

                </div>
            </div>
        </section>
    )
}

export default StatsSection
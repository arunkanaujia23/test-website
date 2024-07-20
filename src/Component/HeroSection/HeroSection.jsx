import React from 'react'
import styles from './heroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={`${styles?.heroSection}`}>
         <div className={`container`}>
            <header>
                <nav >
                    <ul className={styles?.navList}>
                        <li className={styles?.navListItem}><a href="#">Çözüm ve Hizmetler</a></li>
                        <li className={styles?.navListItem}><a href="#">Ürünler</a></li>
                        <li className={styles?.navListItem}><a href="#">Teknolojiler</a></li>
                        <li className={styles?.navListItem}><a href="#"> İnsan Kaynakları</a></li>
                        <li className={styles?.navListItem}><a href="#">Kurumsal</a></li>
                        <li className={styles?.navListItemButton}><a href="#">İletişim</a></li>
                    </ul>
                    
                </nav>
            </header>
            <div className={`${styles?.heroTextContainer}`}>
                <h1 className={`${styles?.heroHeading}`}>Bilgi Teknolojilerinde
                23 Yıllık Tecrübe</h1>
                <p className={`${styles?.heroSubHeading}`}>
                Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
                </p>

                <div className={styles?.inputContainer}>
                        <input className={styles?.input} type="text" placeholder='Mail bültenimize kayıt ol'/>
                        <input className={styles?.inputButton} type="submit" value="Kayıt Ol"  />
                </div>
            </div>
         </div>
    </section>
  )
}

export default HeroSection
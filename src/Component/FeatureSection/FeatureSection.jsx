import React from 'react'
import styles from './featureSection.module.scss'
import File from '../../assets/feature-icon/file.png';
import Chart from '../../assets/feature-icon/chart.png';
import Crown from '../../assets/feature-icon/crown.png';
import Figma from '../../assets/feature-icon/figma.png';
import Pie from '../../assets/feature-icon/pie.png';
import Star from '../../assets/feature-icon/star.png';

const FeatureCardData = [
    {
        icon: File,
        title: 'Döküman Analizi',
        description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
       
    },
    {
        icon: Star,
        title: 'Kabul ve Değerlendirme',
         description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
    },
    {
        icon: Crown,
        title: 'İş Kuralları Analizi',
         description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
    },
    {
        icon: Chart,
        title: 'Akış Diyagramları',
         description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
    },
    {
        icon: Pie,
        title: 'Paydaş Analizi',
         description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
    },
    {
        icon: Figma,
        title: 'Prototipleme',
         description: 'Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.',
    }

]

const FeatureCard = ({ title, description, icon }) => {
    return (
      <div className={styles?.featureCard}>
        <img className={styles?.icon} src={icon} alt={title} />
        <h3 className={styles?.title}>{title}</h3>
        <p className={styles?.description}>{description}</p>
      </div>
    )
  
}
const FeatureSection = () => {
  return (
    <section className={`${styles?.featureSectionContainer} container`}>
        <h2 className={`${styles?.heading}`}>Kalite ve Süreç Yönetimi</h2>
        <p className={`${styles?.subHeading}`}>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>

        <div className={styles?.featureCardContainer}>
            {
                FeatureCardData.map((card, index) => (
                    <FeatureCard key={index} {...card} />
                ))
            }
        </div>
    </section>
  )
}

export default FeatureSection
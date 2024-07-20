import React from 'react'
import styles from './infoSection.module.scss'
import DemoImage from './../../assets/demo.jpg'

const CardDataOne = {
    title: 'Kalite ve Süreç Yönetimi',
    description: 'Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.',
    image: DemoImage,
    path: '#'
}



const ImageAndTextCard = ({ data , direction}) => {
    return (
        <div className={`${styles?.imageAndTextCard} ${direction && styles?.flexDirection}`}>
            <div className={styles?.image}>
                <img src={data?.image} alt="" />
            </div>
            <div className={styles?.text}>
                <div>
                    <h2 className={styles?.heading}>{data?.title}</h2>
                    <p className={styles?.description}>{data?.description}</p>
                </div>

                <a className={styles?.button} href="#">Keşfet</a>
            </div>
        </div>
    )
}


const InfoSection = () => {
    return (
        <section className={styles?.infoSection}>
            <div className={`${styles?.cardContainer} container`}>
                <ImageAndTextCard data={CardDataOne}  />
                <ImageAndTextCard data={CardDataOne} direction />
            </div>
        </section>
    )
}

export default InfoSection
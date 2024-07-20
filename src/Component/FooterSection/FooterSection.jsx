import React from 'react'
import styles from './footerSection.module.scss'

const FooterSection = () => {
    return (
        <footer className={styles?.footerSection}>
            <div className="container">
                <div className={styles?.footerLinksContainer}>
                    <div className={styles?.links}>
                        <h4 className={styles?.linkHeading}>Çözüm ve Hizmetler</h4>
                        <ul className={styles?.linkList}>
                            <li className={styles?.linkItem}><a href="#">Yazılım Geliştirme</a></li>
                            <li className={styles?.linkItem}><a href="#">Outsourcing</a></li>
                            <li className={styles?.linkItem}><a href="#">Kalite ve Süreç Yönetimi</a></li>
                            <li className={styles?.linkItem}><a href="#">Danışmanlık</a></li>
                            <li className={styles?.linkItem}><a href="#">IoT Destekli Çözümler</a></li>
                        </ul>
                    </div>
                    <div className={styles?.links}>
                        <h4 className={styles?.linkHeading}>Ürünlerr</h4>
                        <ul className={styles?.linkList}>
                            <li className={styles?.linkItem}><a href="#">Eğitim Yönetim Sistemi</a></li>
                            <li className={styles?.linkItem}><a href="#">Yİnsan Sermayesi Yönetim Sistemi</a></li>
                            <li className={styles?.linkItem}><a href="#">Müşteri İlişkileri Yönetim Sistemi</a></li>
                            <li className={styles?.linkItem}><a href="#">İçerik Yönetim Sistemi </a></li>
                        </ul>
                    </div>
                    <div className={styles?.links}>
                        <h4 className={styles?.linkHeading}>Kurumsal</h4>
                        <ul className={styles?.linkList}>
                            <li className={styles?.linkItem}><a href="#">Hakkımızda</a></li>
                            <li className={styles?.linkItem}><a href="#">Belge ve Yetkinlikler</a></li>
                            <li className={styles?.linkItem}><a href="#">İş Ortakları</a></li>

                        </ul>
                    </div>
                    <div className={styles?.links}>
                        <h4 className={styles?.linkHeading}>İletişim</h4>
                        <ul className={styles?.linkList}>
                            <li className={styles?.linkItem}><a href="#">Bilgi İstek Formu</a></li>
                            <li className={styles?.linkItem}><a href="#">Uzman Talep Formu</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className={`container ${styles?.bottomFooter}`}>
                <div className={styles?.copyright}>© Copyright 2010-2021 - Can Çevik</div>
                <div className={styles?.socialContainer}>
                    <div>
                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14V28" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18H20" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14V28" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18H20" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14V28" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18H20" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14V28" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18H20" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14V28" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 18H20" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
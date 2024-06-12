import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const SocialMediaSettings = () => {
  const list = [
    {
      title: "İnstagram'dan takip edin!",
      icon: <AiOutlineInstagram className={styles.socialIcon} />,
      link: "https://www.instagram.com/skynotechcom",
    },
    {
      title: "Twitter'dan takip edin!",
      icon: <AiOutlineTwitter className={styles.socialIcon} />,
      link: "https://www.twitter.com/skynotech",
    },
    {
      title: "Facebook'dan takip edin!",
      icon: <AiOutlineFacebook className={styles.socialIcon} />,
      link: "https://www.facebook.com/skynotech",
    },
    {
      title: "Linkedin'den takip edin!",
      icon: <AiOutlineLinkedin className={styles.socialIcon} />,
      link: "https://www.linkedin.com/skynotech",
    },
  ];

  return (
    <div className={styles.darkTheme}>
      <div className={styles.text}>
        <h3 className={styles.secTitle}>Sosyal Medya</h3>
        <h4 className={styles.secInfo}>
          Sosyal medya hesaplarımızı takip ederek bizi yakından
          izleyebilirsiniz! En yeni güncellemeleri, ilham verici içerikler ve
          özel teklifler hakkında bilgi almak için bizi Facebook, Instagram ve
          Twitter üzerinden takip edin. Birlikte daha yakın ve etkileşimli bir
          topluluk oluşturalım!
        </h4>
      </div>
      <div className={styles.cards}>
        {list.map((item, index) => (
          <div key={index} className={styles.card}>
            <PiDotsSixVerticalBold className="icon" />
            <div className={styles.cardContent}>
              <Link target="__blank" className={styles.link} to={item.link}>
                {item.icon}
                <p className={styles.title}>{item.title}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SocialMediaSettings;

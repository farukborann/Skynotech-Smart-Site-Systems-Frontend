// import { useTheme } from "next-themes";
import DarkModeCard from "./card";

import styles from "./style.module.css";

const DarkTheme = () => {
  const list = [
    {
      title: "Sistem (Aydınlık Mod)",
      status: "light",
      bg: "var(--lightmodeBG)",
      loadBG: "var(--lightmodeLoadsBG)",
    },
    {
      title: "Karanlık Mod",
      status: "dark",
      bg: "var(--darkmodeBG)",
      loadBG: "var(--darkmodeLoadsBG)",
    },
  ];

  // const { theme, setTheme } = useTheme();

  // Theme değeri undefined ise boş bir dize olarak ayarla
  // const currentTheme = theme || "";

  return (
    <div className={styles.darkTheme}>
      <div className={styles.text}>
        <h3 className={styles.secTitle}>Karanlık Mod</h3>
        <h4 className={styles.secInfo}>
          Karanlık mod, kullanıcıların göz yorgunluğunu azaltmalarına ve düşük
          ışık koşullarında daha rahat bir deneyim yaşamalarına olanak tanır.
        </h4>
      </div>
      <div className={styles.cards}>
        {list.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.previous}>
              <DarkModeCard bg={item.bg} loadBG={item.loadBG} />
            </div>
            <div className={styles.cardFooter}>
              <label className={styles.buttonLabel} htmlFor={`radio-${index}`}>
                {item.title}
              </label>
            </div>
            <input
              className={styles.radioButton}
              type="radio"
              id={`radio-${index}`}
              value={item.status}
              name="radio"
              // checked={currentTheme.includes(item.status)}
              // onChange={() =>
              //   setTheme(
              //     currentTheme.includes("dark")
              //       ? currentTheme.replace("dark", item.status)
              //       : currentTheme.replace("light", item.status)
              //   )
              // }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkTheme;

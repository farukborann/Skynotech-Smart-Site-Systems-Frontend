// import { useTheme } from "next-themes";
import ThemeCards from "./card";

import styles from "./style.module.css";

const ThemeSettings = () => {
  // const { theme, setTheme } = useTheme();

  // // 'theme' değeri undefined ise boş bir dize olarak ayarla
  // const currentTheme = theme || "";

  // const list = currentTheme.includes("dark")
  //   ? [
  //       {
  //         title: "Sistem (Mavi Mod)",
  //         status: "dark",
  //         bg: "var(--blueBG)",
  //       },
  //       {
  //         title: "Yeşil Mod",
  //         status: "green-dark",
  //         bg: "var(--greenBG)",
  //       },
  //       {
  //         title: "Sarı Mod",
  //         status: "yellow-dark",
  //         bg: "var(--yellowBG)",
  //       },
  //       {
  //         title: "Turuncu Mod",
  //         status: "orange-dark",
  //         bg: "var(--orangeBG)",
  //       },
  //       {
  //         title: "Kırmızı Mod",
  //         status: "red-dark",
  //         bg: "var(--redBG)",
  //       },
  //       {
  //         title: "Mor Mod",
  //         status: "purple-dark",
  //         bg: "var(--purpleBG)",
  //       },
  //     ]
  //   : [
  //       {
  //         title: "Sistem (Mavi Mod)",
  //         status: "light",
  //         bg: "var(--blueBG)",
  //       },
  //       {
  //         title: "Yeşil Mod",
  //         bg: "var(--greenBG)",
  //         status: "green-light",
  //       },
  //       {
  //         title: "Sarı Mod",
  //         status: "yellow-light",
  //         bg: "var(--yellowBG)",
  //       },
  //       {
  //         title: "Turuncu Mod",
  //         status: "orange-light",
  //         bg: "var(--orangeBG)",
  //       },
  //       {
  //         title: "Kırmızı Mod",
  //         status: "red-light",
  //         bg: "var(--redBG)",
  //       },
  //       {
  //         title: "Mor Mod",
  //         status: "purple-light",
  //         bg: "var(--purpleBG)",
  //       },
  //     ];

  const list = [
    {
      title: "Sistem (Mavi Mod)",
      status: "dark",
      bg: "var(--blueBG)",
    },
  ];

  return (
    <div className={styles.darkTheme}>
      <div className={styles.text}>
        <h3 className={styles.secTitle}>Temalar</h3>
        <h4 className={styles.secInfo}>
          Özelleştirilmiş renk seçimleri ile kendi zevkinize göre uygulamayı
          özelleştirebilir, uygulamada geçirdiğiniz süreyi keyifli
          geçirebilirsiniz.
        </h4>
      </div>
      <div className={styles.cards}>
        {list.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.previous}>
              <ThemeCards bg={item.bg} />
            </div>
            <div className={styles.cardFooter}>
              <label className={styles.buttonLabel}>{item.title}</label>
            </div>
            <input
              className={styles.radioButton}
              type="radio"
              name="radio"
              // checked={currentTheme === item.status}
              // onChange={() => setTheme(item.status)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSettings;

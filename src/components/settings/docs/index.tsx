import { Link } from "react-router-dom";

import styles from "./style.module.css";

const DocsSettings = () => {
  return (
    <div className={styles.docs}>
      <div className={styles.text}>
        <h3 className={styles.secTitle}>Dökümantasyonlar</h3>
        <h4 className={styles.secInfo}>
          Kullanıcılarımız, dökümantasyonlara kolayca erişim sağlamak için bu
          sayfayı ziyaret edebilirler. Uygulamamız ilgili talimatlar, kılavuzlar
          ve sıkça sorulan sorular gibi faydalı kaynaklara bu sayfa üzerinden
          ulaşabilir ve daha iyi bir deneyim elde etmek için gereken bilgilere
          kolayca erişebilirler. İhtiyacınız olan tüm bilgilere bir tıkla
          erişin!
        </h4>
      </div>
      <div className={styles.text}>
        <h3 className={styles.secTitle}>Kurulum</h3>
        <h4 className={styles.secInfo}>
          Ürününüzün sorunsuz kurulumunu garanti etmek ve en iyi performansı
          almanızı sağlamak için kurulum işlemi sadece SkynoTech firması
          tarafından gerçekleştirilmektedir. Deneyimli uzmanlarımız, her
          ayrıntıyı dikkatle ele alır ve uygulamamızın en iyi şekilde
          çalışmasını sağlamak için gereken tüm ayarları yapar. Kurulum
          hizmetimizle ilgili daha fazla bilgi almak ve randevu oluşturmak için
          lütfen;
          <Link to="/settings/contact">bizimle iletişime geçin.</Link>
        </h4>
      </div>
      <div className={styles.text}>
        <h3 className={styles.secTitle}>Kişisel Verilerin Korunması</h3>
        <h4 className={styles.secInfo}>
          TARAFLAR, kendisiyle paylaşılan 6698 sayılı Kişisel Verilerin
          Korunması Kanunu kapsamındaki kişisel verilerin muhafazası için tüm
          gereken önlemleri alacağını ve bu verileri aralarındaki sözleşmeye
          konu hizmetlerin sunulmasına yönelik amaçlar haricinde herhangi bir
          amaçla kullanmayacağını ve bu cihetle bu verileri üçüncü kişi ve/veya
          kişiler ile paylaşmayacağını kabul, beyan ve taahhüt eder. TARAFLAR
          ayrıca, 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca
          kişisel verilerin hukuka aykırı olarak işlenmesini, kişisel verilere
          hukuka aykırı olarak erişilmesini önlemek ve kişisel verilerin
          muhafazasını sağlamak amacıyla, uygun güvenlik düzeyini temin etmeye
          yönelik gerekli her türlü fiziki, teknik ve idari tedbirleri almak
          zorundadır ve bu önlemlerin alınması hususunda sorumludur.
          <br /> <br />
          TARAFLAR, bu yükümlülüğünü yerine getirmemesi sebebiyle diğer tarafın
          maruz kaldığı her türlü idari para cezasına karşı diğer tarafı beri
          kılmakla yükümlüdür. TARAFLAR, Sözleşme gereği kendisi ile paylaşılan
          kişisel verileri, gizli bilgi olarak kabul edip süresiz olarak ifşa
          etmemekle yükümlü olacaktır. Bu bağlamda; her bir taraf, 3. Kişilerle
          ilgili olarak aktardığı kişisel verilere ilişkin ilgili kanun
          kapsamında gerekli aydınlatma ve bilgilendirmenin yapıldığını, işleme,
          muhafaza, aktarım için açık onay ve izinlerin ilgililerden alındığını,
          gerekmesi halinde diğer tarafa iletebileceğini ve diğer tarafın
          herhangi bir inceleme ile karşılaşması halinde gerekli tüm belge ve
          bilgileri paylaşacağını ve bu nedenle diğer tarafın ceza veya tazminat
          dahil herhangi bir ödeme yapmak zorunda olması halinde; bu bedelin
          kendisine diğer taraf tarafından rücu edileceğini kabul eder.
          <br /> <br />
          TARAFLAR, Sözleşme herhangi bir şekilde sona erdiği takdirde, diğer
          taraf adına işlemiş olduğu tüm kişisel verileri diğer tarafa
          devredecek ve sistemlerinden asıl ve yedeklerini silecektir. Her bir
          taraf, kendisi ile paylaşılan kişisel verilerin kanuni olmayan yollar
          ile başkaları tarafından elde edilmesi halinde; bu durumu en kısa süre
          içerisinde diğer tarafa bildirecektir.
        </h4>
      </div>
      <div className={styles.text}>
        <h3 className={styles.secTitle}>Hata Ayıklama ve Sorun Giderme</h3>
        <h4 className={styles.secInfo}>
          Hata ayıklama ve sorun giderme konularında yardıma ihtiyacınız
          olduğunda, size en iyi destek hizmetini sunabilmemiz için SkynoTech
          firması ile iletişime geçmenizi tavsiye ediyoruz. Profesyonel
          ekibimiz, her türlü sorunuza ve gereksiniminize hızlı ve etkili bir
          şekilde yanıt verebilir. Sorunlarınızın en hızlı şekilde çözülmesi ve
          uygulamamızın sorunsuz bir şekilde çalışmasını sağlamak için lütfen
          SkynoTech Destek Ekibi ile iletişime geçmekten çekinmeyin. Size
          yardımcı olmaktan mutluluk duyarız.
        </h4>
      </div>
    </div>
  );
};
export default DocsSettings;

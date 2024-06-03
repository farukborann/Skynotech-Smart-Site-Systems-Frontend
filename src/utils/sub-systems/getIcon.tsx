import { CgSmartHomeBoiler, CgSmartHomeLight } from "react-icons/cg";
import { FaSwimmingPool } from "react-icons/fa";
import { FaHouseFloodWater } from "react-icons/fa6";
import { PiFan } from "react-icons/pi";
import { TbDroplet } from "react-icons/tb";
import card1 from "src/assets/systems/card/1.webp";
import card2 from "src/assets/systems/card/2.webp";
import card3 from "src/assets/systems/card/3.webp";
import card4 from "src/assets/systems/card/4.webp";
import card5 from "src/assets/systems/card/5.webp";
import card6 from "src/assets/systems/card/6.webp";
import {
  SystemTypeEnum,
  SystemTypeType,
} from "src/services/sub-systems/models";

const getIconForSubSystem = (systemType: SystemTypeType) => {
  switch (systemType) {
    case SystemTypeEnum.GARDEN_WATERING:
      return {
        title: "Bahçe Sulama",
        icon: <TbDroplet />,
        link: "sulama",
        img: card1,
        sensor: "Nem Sensörü",
        sensorDesc:
          "Topraktaki nem oranının ölçülüp, kullanıcıyı bilgilendirme amacı taşır.",
        birim: "g/m³",
      };
    case SystemTypeEnum.LIGHTING:
      return {
        title: "Aydınlatma",
        icon: <CgSmartHomeLight />,
        link: "aydinlatma",
        img: card2,
        sensor: "Aydınlık Sensörü",
        birim: "lm",
      };
    case SystemTypeEnum.BOILER:
      return {
        title: "Boiler",
        icon: <CgSmartHomeBoiler />,
        link: "boiler",
        img: card3,
        sensor: "Termometre",
        birim: "C°",
      };
    case SystemTypeEnum.VENTILATION:
      return {
        title: "Havalandırma",
        icon: <PiFan />,
        link: "havalandirma",
        img: card4,
        sensor: "Karbondioksit Sensörü",
        birim: "ppm",
      };
    case SystemTypeEnum.POOL:
      return {
        title: "Havuz",
        icon: <FaSwimmingPool />,
        link: "havuz",
        img: card5,
        sensor: "pH Sensörü",
        birim: "pH",
      };
    case SystemTypeEnum.WASTE_WATER_PUMP:
      return {
        title: "Atık Su Pompaları",
        icon: <FaHouseFloodWater />,
        link: "atik",
        img: card6,
        sensor: "Atık Su Sensörü",
        birim: "%",
      };
    default:
      return null; // Belirtilen sistem numarasına karşılık gelen bir ikon yoksa null döndürülebilir.
  }
};

export default getIconForSubSystem;

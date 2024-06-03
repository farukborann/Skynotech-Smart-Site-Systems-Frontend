import { useState } from "react";
import moment from "moment";
import "moment/locale/tr";
import { BiMessageAltError } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const DateHome = () => {
  const [selectedDay, setSelectedDay] = useState(moment());
  const currentDate = moment();
  const month = currentDate.format("MMMM YYYY");

  const daysArray = [];
  for (let i = 6; i >= 0; i--) {
    const day = currentDate.clone().subtract(i, "days");
    daysArray.push(day);
  }
  const timeZone = currentDate.format("Z");
  const numericOffset = parseInt(timeZone, 10);

  const handlePrevDay = () => {
    const previousDay = selectedDay.clone().subtract(1, "day");

    // Kontrol ekleyerek, eğer mevcut günün 7 gün öncesine gitmeye çalışıyorsa günümüze döndür.
    if (previousDay.isBefore(moment().subtract(7, "days"))) {
      setSelectedDay(moment());
    } else {
      setSelectedDay(previousDay);
    }
  };

  const handleNextDay = () => {
    const nextDay = selectedDay.clone().add(1, "day");

    // Kontrol ekleyerek, eğer mevcut günün 1 gün sonrasına gitmeye çalışıyorsa günümüze döndür.
    if (nextDay.isAfter(moment())) {
      setSelectedDay(moment().subtract(6, "days"));
    } else {
      setSelectedDay(nextDay);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={styles.date}>
          <h1 className={styles.titleText}>{month}</h1>
          <div className={styles.icons}>
            <FaAngleLeft onClick={handlePrevDay} />
            <FaAngleRight onClick={handleNextDay} />
          </div>
        </div>
        <Link to="/settings/contact" className={styles.contact}>
          <BiMessageAltError />
          Hata Bildir
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.timezone}>GMT +{numericOffset}</div>
        <div className={styles.days}>
          {daysArray.map((day, index) => (
            <label key={index} className={styles.day}>
              <span className={styles.dayName}>
                {day.format("ddd").toLowerCase()}
              </span>
              <span className={styles.dayNumber}>{day.format("D")}</span>
              <input
                type="radio"
                name="day"
                onChange={() => console.log("degisti")}
                className={styles.radio}
                checked={day.format("D") === selectedDay.format("D")}
                value={selectedDay.format("LL")}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateHome;

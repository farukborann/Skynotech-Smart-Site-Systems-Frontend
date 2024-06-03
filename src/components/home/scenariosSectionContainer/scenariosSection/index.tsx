import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { getUsersScenariosReq } from "src/services/scenarios";
import { UsersScenario } from "src/services/scenarios/models";

import ActiveScenariosHome from "./active";
import InActiveScenariosHome from "./inActive";
import WillActiveScenariosHome from "./willActive";

import styles from "./style.module.css";

const ScenariosSection = () => {
  const scrollRef = useRef<any>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mouseDown, setMouseDown] = useState(false); // Mouse tıklama durumunu izlemek için state

  const [scenarios, setScenarios] = useState<UsersScenario[]>([]);
  const [activeScenarios, setActiveScenarios] = useState<UsersScenario[]>([]);
  const [willActiveScenarios, setWillActiveScenarios] = useState<
    UsersScenario[]
  >([]);
  const [inactiveScenarios, setInactiveScenarios] = useState<UsersScenario[]>(
    []
  );

  const handleMouseDown = (e: any) => {
    setMouseDown(true);
    setStartX(e.pageX - scrollRef!.current!.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: any) => {
    if (mouseDown && scrollRef.current) {
      e.preventDefault();
      const x = e.pageX - startX;
      scrollRef.current.scrollLeft = scrollLeft - x;
    }
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  useEffect(() => {
    // Mouse hareketlerini dinlemek için window'a event listener ekle
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      // Component kaldırıldığında event listener'ları temizle
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseDown, startX, scrollLeft]);

  const now = moment();
  const oneHourAgo = now.clone().subtract(1, "hour");

  useEffect(() => {
    getUsersScenariosReq().then((data) => {
      if ("error" in data) {
        // TODO: Show error message
        return;
      }

      const sortedScenarios = data.result
        .sort((a, b) => {
          // endTime'leri doğrudan karşılaştırın
          return moment(a.scenario.endDate).diff(moment(b.scenario.endDate));
        })
        .sort((a, b) => {
          // endTime formattedOneHourAgo'dan büyükse ağırlık verin
          return moment(a.scenario.endDate) >= moment(oneHourAgo) ? -1 : 1;
        });

      setScenarios(sortedScenarios);
    });
    // Şimdi formattedScenarios dizisini endTime'e göre sıralayabilirsiniz
  }, []);

  useEffect(() => {
    // Aktif senaryoları ve inaktif senaryoları ayırmak için boş diziler oluştur
    const activeScenarios: UsersScenario[] = [];
    const willActiveScenarios: UsersScenario[] = [];
    const inactiveScenarios: UsersScenario[] = [];

    scenarios.forEach((usersScenario) => {
      const startTime = moment(usersScenario.scenario.startDate);
      const endTime = moment(usersScenario.scenario.endDate);

      // endTime saatini startTime saatinden küçükse, endTime'e bir gün ekleyerek güncelle
      if (endTime.isBefore(startTime)) {
        endTime.add(1, "day");
      }

      const now = moment();

      const differencTimes = startTime.hours() - now.hours();

      if (startTime.isBefore(now) && endTime.isAfter(now)) {
        activeScenarios.push(usersScenario);
      } else if (startTime.isAfter(now) && differencTimes >= 0) {
        willActiveScenarios.push(usersScenario);
      } else {
        inactiveScenarios.push(usersScenario);
      }
    });

    const sortedWillActiveScenarios = willActiveScenarios.sort((a, b) => {
      // startTime'leri doğrudan karşılaştır
      return moment(a.scenario.startDate).diff(moment(b.scenario.startDate));
    });

    setActiveScenarios(activeScenarios);
    setWillActiveScenarios(sortedWillActiveScenarios);
    setInactiveScenarios(inactiveScenarios);
  }, [scenarios]);

  return (
    <div className={`${styles.scenarios} ${styles.section}`}>
      <div className={styles.title}>
        <h4 className={styles.titleText}>Senaryolar</h4>
        <div className={styles.line}></div>
        <a className={styles.link} href="/">
          Tümünü Gör
        </a>
      </div>
      <div
        className={styles.content}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={() => {
          if (mouseDown) handleMouseUp();
        }}
      >
        <div className={styles.active}>
          {activeScenarios.map((usersScenario, index) => {
            return (
              <ActiveScenariosHome
                key={`${usersScenario.scenario.name}-${index}`}
                usersScenario={usersScenario}
              />
            );
          })}
        </div>
        <div className={styles.willactive}>
          {willActiveScenarios.map((usersScenario, index) => {
            return (
              <WillActiveScenariosHome
                key={`${usersScenario.scenario.name}-${index}`}
                usersScenario={usersScenario}
              />
            );
          })}
        </div>
        <div className={styles.inactive}>
          {inactiveScenarios.map((usersScenario, index) => {
            return (
              <InActiveScenariosHome
                key={`${usersScenario.scenario.name}-${index}`}
                usersScenario={usersScenario}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScenariosSection;

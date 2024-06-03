import { useState, useEffect } from "react";
import moment from "moment";
import { LuCalendarClock } from "react-icons/lu";
import { useSelector } from "react-redux";
import DefaultPP from "src/assets/profil.svg";
import { UsersScenario } from "src/services/scenarios/models";
import { getExternalUserReq } from "src/services/users";
import { ExternalUserResponse } from "src/services/users/models";
import { RootState } from "src/store/Reducers";
import getIconForSubSystem from "src/utils/sub-systems/getIcon";

import styles from "./style.module.css";

const ActiveScenariosHome = ({
  usersScenario,
}: {
  usersScenario: UsersScenario;
}) => {
  const userData = useSelector((state: RootState) => state.userData.data);

  const [managersProfiles, setManagersProfiles] = useState<string[]>([]);
  const [firstThreeManager, setFirstThreeManager] = useState<
    ExternalUserResponse[]
  >([]);
  const [extraManagerCount, setExtraManagerCount] = useState<number>(0);

  useEffect(() => {
    // managersRef.current her zaman aynı referansı tutar
    const filteredAdmins = usersScenario.site.admins.filter(
      (userId) => userId !== userData._id
    );

    const filteredUsers = usersScenario.site.users.filter(
      (userId) => userId !== userData._id
    );
    setManagersProfiles([...filteredAdmins, ...filteredUsers]);
  }, []);

  useEffect(() => {
    const updateManagers = async () => {
      // Sadece ilk üç manager'ı al
      const firstThreeManagers = await Promise.all(
        managersProfiles.slice(0, 3).map(async (userId) => {
          const externalUser = await getExternalUserReq({
            userId,
            siteId: usersScenario.site._id,
          });

          if ("error" in externalUser) {
            return {
              _id: userId,
              firstName: "Hata",
              lastName: "",
              email: "",
              phoneNumber: "",
              createdAt: "",
              profilePhoto: DefaultPP,
            } as ExternalUserResponse;
          }

          return externalUser.result;
        })
      );
      // Fazla olanların sayısını hesapla
      const extraManagersCount = managersProfiles.length - 3;

      setFirstThreeManager(firstThreeManagers);
      setExtraManagerCount(extraManagersCount);
    };

    updateManagers();
  }, [managersProfiles]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.info}>
          <div className={styles.icon}>
            {getIconForSubSystem(usersScenario.subSystem.systemType)?.icon}
          </div>
          <div className={styles.title}>
            <p className={styles.siteName}>{usersScenario.site.name}</p>
            <p className={styles.scenarioName}>{usersScenario.scenario.name}</p>
            <p className={styles.clock}>
              <LuCalendarClock />
              {moment(usersScenario.scenario.startDate).format("HH:mm")} -{" "}
              {moment(usersScenario.scenario.endDate).format("HH:mm")}
            </p>
          </div>
        </div>
        <p className={styles.time}>Aktif</p>
      </div>
      <div className={styles.managers}>
        {firstThreeManager.map((profile) => (
          <img
            className={styles.manager}
            src={profile.profilePhoto || DefaultPP}
            alt={`${profile.firstName} ${profile.lastName}`}
            key={profile._id}
          />
        ))}
        {/* Eğer fazla manager varsa, onları +x olarak göster */}
        {extraManagerCount > 0 && (
          <span className={styles.extraManagers}>+{extraManagerCount}</span>
        )}
      </div>
    </div>
  );
};

export default ActiveScenariosHome;

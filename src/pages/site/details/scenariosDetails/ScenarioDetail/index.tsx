import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { LuCalendarClock } from "react-icons/lu";
import getSubSystemProps from "src/utils/sub-systems/getProps";
import { ScenarioResponse } from "src/services/scenarios/models";
import { SubSystemResponse } from "src/services/sub-systems/models";
import { SiteResponse } from "src/services/sites/models";
import { ExternalUserResponse } from "src/services/users/models";

import DefaultPP from "src/assets/profil.svg";
import { useSelector } from "react-redux";
import { RootState } from "src/store/Reducers";
import { getExternalUserReq } from "src/services/users";
import moment from "moment";

const ScenarioDetail = ({
  siteData,
  subSystem,
  scenario,
}: {
  siteData: SiteResponse;
  subSystem: SubSystemResponse;
  scenario: ScenarioResponse;
}) => {
  const userData = useSelector((state: RootState) => state.userData.data);

  const [managersProfiles, setManagersProfiles] = useState<string[]>([]);
  const [firstThreeManager, setFirstThreeManager] = useState<
    ExternalUserResponse[]
  >([]);

  useEffect(() => {
    // managersRef.current her zaman aynı referansı tutar
    const filteredAdmins = siteData.admins.filter(
      (userId) => userId !== userData._id
    );

    const filteredUsers = siteData.users.filter(
      (userId) => userId !== userData._id
    );
    setManagersProfiles([...filteredAdmins, ...filteredUsers]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const updateManagers = async () => {
      // Sadece ilk üç manager'ı al
      const firstThreeManagers = await Promise.all(
        managersProfiles.slice(0, 3).map(async (userId) => {
          const externalUser = await getExternalUserReq({
            userId,
            siteId: siteData._id,
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

      setFirstThreeManager(firstThreeManagers);
    };

    updateManagers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [managersProfiles]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>
          {getSubSystemProps(subSystem.systemType)?.icon}
        </div>
        <div className={styles.title}>
          <p className={styles.name}>{scenario.name}</p>
          <p className={styles.times}>
            <LuCalendarClock />
            {moment(scenario.startDate).format("HH:mm")} -{" "}
            {moment(scenario.endDate).format("HH:mm")}
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default ScenarioDetail;

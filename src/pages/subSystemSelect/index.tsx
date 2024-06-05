import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSiteByIdReq } from "src/services/sites";
import { SiteResponse } from "src/services/sites/models";
import { getSubSystemsBySiteIdReq } from "src/services/sub-systems";
import { SubSystemResponse } from "src/services/sub-systems/models";
import getSubSystemProps from "src/utils/sub-systems/getProps";

import styles from "./style.module.css";

const SubSystemSelect = () => {
  const { siteId } = useParams();

  const navigate = useNavigate();

  const [selectedSubSystemId, setSelectedSubSystemId] = useState<string>("");
  const [siteData, setSiteData] = useState<SiteResponse | null>(null);
  const [subSystems, setSubSystems] = useState<SubSystemResponse[]>([]);

  useEffect(() => {
    const updateSite = async () => {
      if (!siteId) return;

      const siteData = await getSiteByIdReq({ id: siteId });

      if ("error" in siteData) {
        // TODO: Handle error
        return;
      }

      setSiteData(siteData.result);
    };

    updateSite();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function updateSubSystems() {
      if (!siteData) return;

      const subSystems = await getSubSystemsBySiteIdReq({ id: siteData._id });

      if ("error" in subSystems) {
        // TODO: Handle error
        return;
      }

      setSubSystems(subSystems.result);
    }

    updateSubSystems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteData]);

  return (
    <div className={styles.container}>
      <span className={styles.blob1}></span>
      <span className={styles.blob2}></span>
      <span className={styles.blob3}></span>
      <span className={styles.blob4}></span>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title}>{siteData?.name}</h1>
          <p className={styles.text}>
            Şu anda incelediğiniz yaşam sitesinin mevcut sistemlerini
            görmektesiniz. Sistemleri yönetmek için sadece bir adım kalmış
            durumda. Lütfen kontrol etmek istediğiniz sistemi seçin ve devam
            edin. Bu sayede istediğiniz şekilde sistemleri zamanlayabilir,
            görüntüleyebilir ve güncelleyebilirsiniz.
          </p>
        </div>
        <div className={styles.systems}>
          {subSystems.map((subSystem, index) => {
            const props = getSubSystemProps(subSystem.systemType);
            return (
              <div key={index} className={styles.system}>
                <h1 className={styles.icon}>{props?.icon}</h1>
                <h1
                  className={styles.systemNameText}
                >{`${props?.title} ${subSystem.name}`}</h1>
                <input
                  className={styles.radio}
                  type="radio"
                  name="system"
                  value={subSystem._id}
                  onChange={() => setSelectedSubSystemId(subSystem._id)}
                  onDoubleClick={() => {
                    if (!selectedSubSystemId) return;

                    navigate(`/scenario/${siteId}/${selectedSubSystemId}`);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <Link className={styles.go} to="/scenario">
          <FaArrowLeft />
        </Link>
        {selectedSubSystemId && (
          <Link
            className={styles.go}
            to={`/scenario/${siteId}/${selectedSubSystemId}`}
          >
            <FaArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SubSystemSelect;

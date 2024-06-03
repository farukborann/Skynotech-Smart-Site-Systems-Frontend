import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getSitesReq } from "src/services/sites";
import { SiteResponse } from "src/services/sites/models";

import styles from "./style.module.css";

const SiteList = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);

  const [sites, setSites] = useState<SiteResponse[]>([]);

  useEffect(() => {
    getSitesReq().then((res) => {
      if ("error" in res) {
        // TODO: show error message
        return;
      }

      setSites(res.result);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6 className={styles.title}>Siteler</h6>
        {isOpen ? (
          <FaAngleUp
            className={styles.icon}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <FaAngleDown
            className={styles.icon}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      </div>
      <div className={isOpen ? styles.open : styles.content}>
        {sites.map((site, index) => (
          <div className={styles.siteName} key={index}>
            <div onClick={() => navigate(`/site/${site._id}`)}>{site.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteList;

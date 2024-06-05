import { useEffect, useState } from "react";
import { RootState } from "/src/store/Reducers";
import { FaArrowRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getSitesReq } from "src/services/sites";
import { SiteResponse } from "src/services/sites/models";
import { getSubSystemsBySiteIdReq } from "src/services/sub-systems";
import { SubSystemResponse } from "src/services/sub-systems/models";
import getSubSystemProps from "src/utils/sub-systems/getProps";

import styles from "./style.module.css";
import "src/styles/elements.css";

const SiteSelect = () => {
  const userData = useSelector((state: RootState) => state.userData.data);

  const navigate = useNavigate();

  const [sites, setSites] = useState<SiteResponse[]>([]);
  const [filteredSites, setFilteredSites] = useState<SiteResponse[]>([]);
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(null);

  const [search, setSearch] = useState<string>("");

  // siteId -> subSystems
  const [subSystems, setSubSystems] = useState<{
    [key: string]: SubSystemResponse[];
  }>({});

  useEffect(() => {
    getSitesReq().then((res) => {
      if ("error" in res) return;

      setSites(res.result);
    });
  }, []);

  useEffect(() => {
    async function updateSubSystems() {
      const newSubSystems: { [key: string]: SubSystemResponse[] } = {};

      for (const site of sites) {
        const sitesSubSystems = await getSubSystemsBySiteIdReq({
          id: site._id,
        });

        if ("error" in sitesSubSystems) return;

        newSubSystems[site._id] = sitesSubSystems.result;
      }

      setSubSystems(newSubSystems);
    }

    updateSubSystems();
  }, [sites]);

  useEffect(() => {
    if (search === "") setFilteredSites(sites);
    else
      setFilteredSites(
        sites.filter((site) =>
          site.name.toLowerCase().includes(search.toLowerCase())
        )
      );
  }, [search, sites]);

  return (
    <div className={styles.container}>
      <span className={styles.blob1}></span>
      <span className={styles.blob2}></span>
      <span className={styles.blob3}></span>
      <span className={styles.blob4}></span>
      <div className={styles.content}>
        <div className={styles.secText}>
          <h1 className={styles.text}>
            Merhaba{" "}
            <span className={styles.username}>{userData?.firstName} </span>
            tekrar hoşgeldin. Yönetebileceğin toplam {sites.length} site
            bulunmakta. Birini seçip yönetmeye başlayabilirsin.
          </h1>
        </div>
        <div className={styles.main}>
          <div className={styles.searchbarDiv}>
            <IoMdSearch className={styles.searchIcon} />
            <input
              type="text"
              className={styles.search}
              placeholder="Bir site ismi girin."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.secSites}>
            <div className={styles.sites}>
              {filteredSites.map((site, index) => (
                <div className={styles.site} key={index}>
                  <div className={styles.siteContent}>
                    <div className={styles.contentTexts}>
                      <h1>{site.name}</h1>
                      <p>{site.address}</p>
                    </div>
                    <div className={styles.systems}>
                      {subSystems[site._id]?.map((subSystem, index) => {
                        const props = getSubSystemProps(subSystem.systemType);
                        return (
                          <span
                            className={styles.systemIcon}
                            key={`${subSystem._id}-${index}`}
                          >
                            {props?.icon}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  {/* TODO: Fix site image problems */}
                  <img
                    // src="/sites/1.webp"
                    alt={site.name}
                    src={`/sites/${site._id}.webp`}
                    width={200}
                    height={200}
                    className={styles.siteImg}
                  />
                  <input
                    className={styles.radio}
                    type="radio"
                    name="site"
                    value={site._id}
                    onChange={() => setSelectedSiteId(site._id)}
                    onDoubleClick={() => {
                      if (!selectedSiteId) return;

                      navigate(`/scenario/${site._id}`);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.footer}>
            {selectedSiteId && (
              <Link to={`/scenario/${selectedSiteId}`} className={styles.next}>
                <FaArrowRight />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSelect;

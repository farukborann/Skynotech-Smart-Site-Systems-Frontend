import React from "react";
import styles from "./style.module.css";

const UserListHeaderComponent = ({ users }) => {
  const roles = [
    {
      name: "Developer",
      desc: "Bütün sistemlerin ve kullanıcıların eklenmesi / kontrolü",
      id: "0",
    },
    {
      name: "Super Admin",
      desc: "Sistemlerin eklenmesi / kontrolü",
      id: "1",
    },
    {
      name: "Admin",
      desc: "Sistemlerin kontrolü",
      id: "2",
    },
    {
      name: "Kullanıcı",
      desc: "Yalnızca görüntüleme",
      id: "3",
    },
  ];

  const countUsersByRole = (roleId) => {
    return users.filter((user) => user.roleID === roleId).length;
  };

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p className={styles.secTitle}>Kullanıcı Listesi</p>
        <p className={styles.userCount}>{users.length} kullanıcı</p>
      </div>
      <div className={styles.roles}>
        {roles.map((role) => (
          <div className={styles.roleDiv}>
            <div className={styles.desc}>
              <p className={styles.roleName}>{role.name}</p>
              <p className={styles.roleDesc}>{role.desc}</p>
            </div>
            <p className={styles.roleNumber}>{countUsersByRole(role.id)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListHeaderComponent;

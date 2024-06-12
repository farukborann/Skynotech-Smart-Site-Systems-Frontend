"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import { MdModeEditOutline, MdDelete, MdMessage } from "react-icons/md";
import UserListContentHeaderComponent from "./header";

const UserListContentComponent = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);

  return (
    <div className={styles.container}>
      <UserListContentHeaderComponent
        setFilteredUsers={setFilteredUsers}
        users={users}
      />
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.rowh}>
            <th className={styles.th}>Kullanıcı</th>
            <th className={styles.th}>Rol</th>
            <th className={styles.th}>Site</th>
            <th className={styles.th}>İletişim</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {filteredUsers.map((user, index) => (
            <tr
              key={index}
              className={styles.row}>
              <td className={styles.td}>
                <img
                  src={user.profile || "/profil.svg"}
                  alt={`${user.name} ${user.lastName}`}
                  height={40}
                  width={40}
                  className={styles.img}
                />
                <td className={styles.name}>
                  <td className={styles.username}>
                    {user.name} {user.lastName}
                  </td>
                  <td className={styles.tel}>{user.tel}</td>
                </td>
              </td>
              <td className={styles.td}>
                <td className={`${styles[`role-${user.roleID}`]}`}>
                  {user.role}
                </td>
              </td>
              <td className={styles.td}>{user.siteIDs.length}</td>
              <td className={`${styles.td} ${styles.mail}`}>{user.mail}</td>
              <td className={`${styles.td} ${styles.btns}`}>
                <button
                  className={styles.btn}
                  onClick={() => alert("Düzenleme.")}>
                  <MdModeEditOutline />
                </button>
                <button
                  className={styles.btn}
                  onClick={() => alert("Mesajlaşma.")}>
                  <MdMessage />
                </button>
                <button
                  className={styles.btn}
                  onClick={() => alert("Silme.")}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListContentComponent;

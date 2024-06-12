"use client";

// UserListContentHeaderComponent.jsx
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { MdOutlineSearch } from "react-icons/md";

const UserListContentHeaderComponent = ({ users, setFilteredUsers }) => {
  const [selectedRole, setSelectedRole] = useState("all");

  useEffect(() => {
    if (selectedRole === "all") {
      setFilteredUsers(users);
    } else {
      const filteredUsers = users.filter(
        (user) => user.roleID === selectedRole
      );
      setFilteredUsers(filteredUsers);
    }
  }, [selectedRole, setFilteredUsers, users]);

  const handleRoleChange = (event) => {
    const roleId = event.target.value;
    setSelectedRole(roleId);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Tüm Kullanıcılar ({users.length})</p>
      <div className={styles.content}>
        <div className={styles.options}>
          <label className={styles.label}>
            Tümü
            <input
              name="radio"
              type="radio"
              value="all"
              onChange={handleRoleChange}
              checked={selectedRole === "all"}
              className={styles.radio}
            />
          </label>
          <label className={styles.label}>
            Developer
            <input
              name="radio"
              type="radio"
              value="0"
              onChange={handleRoleChange}
              checked={selectedRole === "0"}
              className={styles.radio}
            />
          </label>
          <label className={styles.label}>
            Super Admin
            <input
              name="radio"
              type="radio"
              value="1"
              onChange={handleRoleChange}
              checked={selectedRole === "1"}
              className={styles.radio}
            />
          </label>
          <label className={styles.label}>
            Admin
            <input
              name="radio"
              type="radio"
              value="2"
              onChange={handleRoleChange}
              checked={selectedRole === "2"}
              className={styles.radio}
            />
          </label>
          <label className={styles.label}>
            Kullanıcı
            <input
              name="radio"
              type="radio"
              value="3"
              onChange={handleRoleChange}
              checked={selectedRole === "3"}
              className={styles.radio}
            />
          </label>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.input}
            placeholder="Bir Kullanıcı Arayın."
          />
          <span className={styles.icon}>
            <MdOutlineSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserListContentHeaderComponent;

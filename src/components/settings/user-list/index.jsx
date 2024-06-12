"use client";

import React from "react";
import styles from "./style.module.css";
import FetchUsers from "@/utils/firebaseFuncs/fetchUsers";
import UserListHeaderComponent from "./header";
import UserListContentComponent from "./content";

const UserListSettings = () => {
  const users = FetchUsers(); // Boş bağımlılık dizisi, yalnızca bir kere yükle

  return (
    <div className={styles.container}>
      <UserListHeaderComponent users={users} />
      <hr className={styles.line} />
      <UserListContentComponent users={users} />
    </div>
  );
};

export default UserListSettings;

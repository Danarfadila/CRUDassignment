"use client";
import React, { useState } from "react";
import headerStyles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.headerLayout}>
      <div className={headerStyles.logoLayout}>
        <div className={headerStyles.logoTittleLayout}>
          <p className={headerStyles.logoTittle}>Neonote</p>
          <div className={headerStyles.borderLogo}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

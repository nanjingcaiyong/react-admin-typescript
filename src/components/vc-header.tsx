import React from 'react';
import VcNav from './vc-nav'
import styles from './header.less';

const Header = () => {
  return (
    <div className={styles.header}>
      <header><span>持之以恒|</span>勇往直前</header>
      <VcNav></VcNav>
    </div>
  )
}
export default Header;
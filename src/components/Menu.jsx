import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
  return(
    <div className={styles['desktop-menu']}>
    <ul>
      <li>
        <Link href="/checkout" className= {styles.title} >My order</Link>
      </li>

      <li>
        <Link href="/">My account</Link>
      </li>

      <li>
        <Link href="/">Sign out</Link>
      </li>
    </ul>
  </div>
  );
};

export default Menu;
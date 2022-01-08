import React from 'react';
import styles from '~/styles/Home.module.css';

const Layout: React.FC = ({ children }) => <main className={styles.main}>{children}</main>;

export default Layout;

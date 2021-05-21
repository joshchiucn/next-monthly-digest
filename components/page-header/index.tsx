import React, { FunctionComponent } from 'react';
import styles from './style.module.scss'
import Tab from '../tab/index'
import Slogan from '../slogan/index'
const PageHeader: FunctionComponent = () => (
  <header className={styles['page-header']}>
    <Tab onSearchChange={() => {}} onClickSearch={() => {}}/>
    <Slogan/>
  </header>
)
export default PageHeader
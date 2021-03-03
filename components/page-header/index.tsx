import React, { FunctionComponent } from 'react';
// TODO
import styles from './style.module.scss'
import Tab from '../tab/index'
import Slogan from '../slogan/index'
const PageHeader: FunctionComponent = () => (
  <div className={styles['page-header']}>
    <Tab/>
    <Slogan/>
  </div>
)
export default PageHeader
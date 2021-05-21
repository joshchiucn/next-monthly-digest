import React, { FunctionComponent } from 'react';
import styles from './style.module.scss'
import Tab from '../tab/index'
import Slogan from '../slogan/index'
interface Props {
  search: string,
  onSearchChange: (string) => void,
  onClickSearch: () => void
}
const PageHeader: FunctionComponent<Props> = (props) => (
  <header className={styles['page-header']}>
    <Tab search={props.search} onSearchChange={props.onSearchChange} onClickSearch={props.onClickSearch}/>
    <Slogan/>
  </header>
)
export default PageHeader
import { FunctionComponent, ComponentProps } from 'react'
import styles from './style.module.css'
interface Props {
  current: number,
  pageSize: number,
  total: number
}
const Pagination: FunctionComponent<Props> = (props) => {
  const pageCount = Math.floor(props.total / props.pageSize)
  const disablePrev = props.current === 1
  const disableNext = props.current === pageCount
  return <ol className={styles.pagination}>
    <li className={`${disablePrev ? styles.disabled : ''} ${styles['pagination-button']}`}>&lt;</li>
    <li className={`${disableNext ? styles.disabled : ''} ${styles['pagination-button']}`}>&gt;</li>
  </ol>
}

export default Pagination
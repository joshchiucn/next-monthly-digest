import { FunctionComponent, ComponentProps } from 'react'
import styles from './style.module.css'
interface Props {
  current: number,
  pageSize: number,
  total: number,
  // TODO
  onClickPrev: any,
  onClickNext: any
}
const Pagination: FunctionComponent<Props> = (props) => {
  const pageCount = Math.ceil(props.total / props.pageSize)
  const disablePrev = props.current === 1
  const disableNext = props.current === pageCount
  
  const onClickPrev = () => {
    if (!disablePrev) {
      props.onClickPrev()
    }
  }
  const onClickNext = () => {
    if (!disableNext) {
      props.onClickNext()
    }
  }
  return <ol className={styles.pagination}>
    <li className={`${disablePrev ? styles.disabled : ''} ${styles['pagination-button']}`} onClick={onClickPrev}>&lt;</li>
    <li className={`${disableNext ? styles.disabled : ''} ${styles['pagination-button']}`} onClick={onClickNext}>&gt;</li>
  </ol>
}

export default Pagination
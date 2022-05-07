import styles from './Toggle.module.scss'
import { cx } from '../../styles'
import { useState } from 'react'

function Toggle() {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle((prevState) => !prevState)
  }

  return (
    <div className={styles.container}>
      <div className={cx(styles.toggleBar, { [styles.toggleRight]: !toggle })}> </div>
      <button type='button' className={cx(styles.toggleItem, { [styles.toggled]: !toggle })} onClick={handleToggle}>
        기본
      </button>
      <button type='button' className={cx(styles.toggleItem, { [styles.toggled]: toggle })} onClick={handleToggle}>
        상세
      </button>
    </div>
  )
}

export default Toggle

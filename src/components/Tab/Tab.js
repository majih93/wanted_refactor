import { useState } from 'react'
import styles from './Tab.module.scss'
import PropTypes from 'prop-types'

const TAB_TITLES = [
  { id: 1, title: '프리' },
  { id: 2, title: '온보딩' },
  { id: 3, title: '화이팅' },
]

function Tab() {
  const [clickedTab, setClickedTab] = useState(0)

  const underBarTransformStyle = {
    transform: `translateX(${clickedTab * 100}%)`,
  }

  return (
    <div className={styles.container}>
      {TAB_TITLES.map((item, index) => (
        <TabItem key={item.id} title={item.title} index={index} setClickedTab={setClickedTab} />
      ))}
      <div className={styles.underBar} style={underBarTransformStyle} />
    </div>
  )
}

function TabItem({ title, index, setClickedTab }) {
  const handleTabClick = () => {
    setClickedTab(index)
  }
  return (
    <button type='button' className={styles.title} onClick={handleTabClick}>
      {title}
    </button>
  )
}

TabItem.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  setClickedTab: PropTypes.func,
}

export default Tab

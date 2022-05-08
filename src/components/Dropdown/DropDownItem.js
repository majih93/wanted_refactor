import styles from './DropDownItem.module.scss'
import PropTypes from 'prop-types'

function DropDownItem({ title, setIsDropped, setClickedItem, searchedItem, setSearchedItem }) {
  const handleItemClick = () => {
    setClickedItem(title)
    setIsDropped(false)
    if (searchedItem !== '') {
      setSearchedItem('')
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className={styles.itemTitle} onClick={handleItemClick}>
      {title}
    </li>
  )
}

export default DropDownItem

DropDownItem.propTypes = {
  title: PropTypes.string,
  setIsDropped: PropTypes.func,
  setClickedItem: PropTypes.func,
  searchedItem: PropTypes.string,
  setSearchedItem: PropTypes.func,
}

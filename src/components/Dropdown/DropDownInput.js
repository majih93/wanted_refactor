import styles from './DropDownInput.module.scss'
import PropTypes from 'prop-types'
import { BiSearch as SearchIcon } from 'react-icons/bi'

function DropDownInput({ setSearchedItem }) {
  const handleItemSearch = (e) => {
    setSearchedItem(e.currentTarget.Value)
  }

  return (
    <div className={styles.container}>
      <SearchIcon className={styles.searchIcon} />
      <input type='text' placeholder='Search Symbol' className={styles.searchInput} onChange={handleItemSearch} />
    </div>
  )
}

export default DropDownInput

DropDownInput.propTypes = {
  setSearchedItem: PropTypes.func,
}

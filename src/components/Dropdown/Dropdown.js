import styles from './Dropdown.module.scss'
import { TiArrowSortedDown as DropArrow } from 'react-icons/ti'
import { useState } from 'react'
import DropDownInput from './DropDownInput'
import DropDownItem from './DropDownItem'

const ITEMS = [
  { id: 1, title: 'All Symbols' },
  { id: 2, title: 'BTCUSD.PERP' },
  { id: 3, title: 'ETHUSD.PERP' },
  { id: 4, title: 'BCHUSD.PERP' },
  { id: 5, title: 'LTCUSD.PERP' },
  { id: 6, title: 'XRPUSD.PERP' },
  { id: 7, title: '1000SHIBUSD.PER' },
]

function Dropdown() {
  const [clickedItem, setClickedItem] = useState(ITEMS[0].title)
  const [isDropped, setIsDropped] = useState(false)
  const [searchedItem, setSearchedItem] = useState('')

  const handleDropToggle = () => {
    setIsDropped((prevState) => !prevState)
  }

  const filteredItems = ITEMS.filter((item) => item.id === 1 || item.title.toLowerCase().includes(searchedItem))
  console.log(filteredItems)
  console.log(searchedItem)

  return (
    <div className={styles.container}>
      <div className={styles.clickedItemContainer}>
        <span className={styles.clickedItemTitle}>{clickedItem}</span>
        <DropArrow onClick={handleDropToggle} />
      </div>
      {isDropped && (
        <div className={styles.inputContainer}>
          <DropDownInput setSearchedItem={setSearchedItem} />
          <div className={styles.itemsContainer}>
            {filteredItems.map((item) => (
              <DropDownItem
                key={item.id}
                title={item.title}
                setIsDropped={setIsDropped}
                setClickedItem={setClickedItem}
                searchedItem={searchedItem}
                setSearchedItem={setSearchedItem}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown

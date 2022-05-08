import Input from '../components/Input/Input'
import Slider from '../components/Slider/Slider'
import Tab from '../components/Tab/Tab'
import Toggle from '../components/Toggle/Toggle'
import Dropdown from '../components/Dropdown/Dropdown'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App

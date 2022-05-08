import { useState } from 'react'
import styles from './Slider.module.scss'

const PERCENTAGES = [1, 25, 50, 75, 100]

function Slider() {
  const [currentValue, setCurrentValue] = useState(15)

  const handleSlide = (e) => {
    setCurrentValue(e.currentTarget.value)
  }

  const SliderTrackFillStyles = {
    width: currentValue < 43 && currentValue > 1 ? `${currentValue + 5}%` : `${currentValue}%`,
  }

  const CircleFillStyles = {}

  return (
    <div className={styles.container}>
      <section className={styles.valueContainer}>
        <span className={styles.value}>{currentValue}</span>
        <span className={styles.percentageIcon}>%</span>
      </section>
      <section className={styles.barContainer}>
        <input type='range' min={1} max={100} value={currentValue} className={styles.scaleBar} onChange={handleSlide} />
        <div className={styles.inputTrack} />
        <div className={styles.fillLeftContainer} style={SliderTrackFillStyles}>
          <div className={styles.fillLeft} />
        </div>
        <div className={styles.circleContainer}>
          {PERCENTAGES.map((percentage) => (
            <span key={percentage} className={styles.circle} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Slider

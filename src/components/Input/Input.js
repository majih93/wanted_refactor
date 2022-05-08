import styles from './Input.module.scss'
import { BsFillCheckCircleFill as CheckedIcon } from 'react-icons/bs'
import { ImEyeBlocked as NotShowedIcon, ImEye as ShowedIcon } from 'react-icons/im'
import { useState } from 'react'
import { cx } from '../../styles'

function Input() {
  const [isValidated, setIsValidated] = useState('')
  const [pwType, setPwType] = useState('password')

  console.log(isValidated)

  const validateEmail = (e) => {
    const email = e.currentTarget.value

    console.log(email)

    if (email === '') {
      setIsValidated('')
    } else {
      const validationRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/
      if (validationRegex.test(email) === true) {
        setIsValidated(true)
      } else {
        setIsValidated(false)
      }
    }
  }

  const handlePwTypeChange = () => {
    if (pwType === 'password') {
      setPwType('text')
    } else {
      setPwType('password')
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.inputForm}>
        <div className={styles.inputContainer}>
          <label htmlFor='EmailInput' className={styles.inputLabel}>
            E-mail
          </label>
          <input id='EmailInput' type='text' placeholder='E-mail' className={styles.input} onChange={validateEmail} />
          <CheckedIcon className={cx(styles.checkedIcon, { [styles.validated]: isValidated })} />
          <span className={cx(styles.errorMessage, { [styles.notValidated]: isValidated === false })}>
            Invalid e-mail address.
          </span>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='PasswordInput' className={styles.inputLabel}>
            Password
          </label>
          <input type={pwType} placeholder='Password' className={styles.input} />
          {pwType === 'password' ? (
            <NotShowedIcon className={styles.pwNotShowIcon} onClick={handlePwTypeChange} />
          ) : (
            <ShowedIcon className={styles.pwShowIcon} onClick={handlePwTypeChange} />
          )}
        </div>
      </form>
    </div>
  )
}

export default Input

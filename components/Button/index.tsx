import React, { ReactElement } from 'react'
import styles from './styles.module.scss'

interface Props {
  text: any;
  handleClick: () => void;
}

function Button({
  text,
  handleClick
}: Props): ReactElement {
  const handleClickButton = (): void => {
    if (handleClick && typeof handleClick === 'function') {
      handleClick()
    }
  }

  return (
    <button
      className={styles.button}
      onClick={handleClickButton}
    >
      {text}
    </button>
  )
}

export default Button

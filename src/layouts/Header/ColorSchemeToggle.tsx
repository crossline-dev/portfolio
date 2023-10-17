'use client'

import {
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { PiSunLight, PiMoonLight } from 'react-icons/pi'
import { RiMoonFill } from 'react-icons/ri'
import cx from 'clsx'
import styles from './ColorSchemeToggle.module.css'

export default function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })
  return (
    <UnstyledButton
      className={styles.button}
      onClick={() =>
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
      }
      aria-label="Toggle color scheme"
    >
      <PiSunLight className={cx(styles.icon, styles.light)} />
      <RiMoonFill className={cx(styles.icon, styles.dark)} />
    </UnstyledButton>
  )
}

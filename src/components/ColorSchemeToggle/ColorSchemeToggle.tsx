'use client'

import {
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'
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
      <BiSolidSun className={cx(styles.icon, styles.light)} />
      <BiSolidMoon className={cx(styles.icon, styles.dark)} />
    </UnstyledButton>
  )
}

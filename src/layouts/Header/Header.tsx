'use client'

import { Flex } from '@mantine/core'
import styles from './Header.module.css'
import DrawerMenu from './DrawerMenu'
import { SiteLogo } from './SiteLogo'
import ColorSchemeToggle from './ColorSchemeToggle'

export default function Header() {
  return (
    <header className={styles.header}>
      <SiteLogo />
      <Flex className={styles.buttons}>
        <ColorSchemeToggle />
        <DrawerMenu />
      </Flex>
    </header>
  )
}

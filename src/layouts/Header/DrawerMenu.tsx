import { useDisclosure } from '@mantine/hooks'
import { Drawer, Flex, UnstyledButton } from '@mantine/core'
import { useLenis } from '@studio-freight/react-lenis'
import styles from './DrawerMenu.module.css'
import Link from 'next/link'
import { ActiveLink } from '@/components'

export default function DrawerMenu() {
  const lenis = useLenis()
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => {
      lenis.stop()
    },
    onClose: () => {
      lenis.start()
    },
  })
  return (
    <>
      <Drawer.Root
        opened={opened}
        onClose={handlers.close}
        size="100%"
        className={styles.root}
        transitionProps={{
          transition: 'fade',
          duration: 400,
          timingFunction: 'easeInOut',
        }}
      >
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.content}>
          <Drawer.Body className={styles.body}>
            <Flex className={styles.inner}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <ActiveLink href="/" onClick={handlers.toggle}>
                    HOME
                  </ActiveLink>
                </li>
                <li className={styles.listItem}>
                  <ActiveLink href="/about/" onClick={handlers.toggle}>
                    ABOUT ME
                  </ActiveLink>
                </li>
                <li className={styles.listItem}>
                  <ActiveLink href="/works/" onClick={handlers.toggle}>
                    WORKS
                  </ActiveLink>
                </li>
                <li className={styles.listItem}>
                  <ActiveLink href="/plan/" onClick={handlers.toggle}>
                    PLAN
                  </ActiveLink>
                </li>
                <li className={styles.listItem}>
                  <ActiveLink href="/contact/" onClick={handlers.toggle}>
                    CONTACT
                  </ActiveLink>
                </li>
              </ul>
            </Flex>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <UnstyledButton
        onClick={handlers.toggle}
        className={opened ? `${styles.button} ${styles.open}` : styles.button}
      ></UnstyledButton>
    </>
  )
}

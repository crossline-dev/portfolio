'use client'

import { createTheme } from '@mantine/core'

export const theme = createTheme({
  white: '#fafbfc',
  black: '#1a1e2e',
  components: {
    Container: {
      defaultProps: {
        size: '100%',
      },
    },
  },
})

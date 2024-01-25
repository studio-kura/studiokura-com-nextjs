import { ReactElement, ReactNode } from 'react'
import { Stack } from '@chakra-ui/react'

interface Props {
  children: ReactElement | ReactNode
}

const CardStack: React.FC<Props> = ({ children }) => {
  return (
    <Stack
      align={'center'}
      justify={'center'}
      direction={'row'}
      mt={6}
      display={'flex'}
      alignItems={'flex-start'}
    >
      {children}
    </Stack>
  )
}

export { CardStack }

import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

interface Props {
  title?: string
  children: ReactElement | ReactNode
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Box
        bg="gray.50"
        color="black"
        _dark={{
          bg: 'gray.900',
          color: 'white'
        }}
      >
        {children}
      </Box>
    </>
  )
}

export { Layout }

Layout.defaultProps = {
  title: 'Studio Kura絵画教室 | 大人から子どもまで、絵画教室ならStudio Kura'
}

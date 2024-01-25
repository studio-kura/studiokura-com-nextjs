import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'

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
      <>{children}</>
    </>
  )
}

export { Layout }

Layout.defaultProps = {
  title: 'Studio Kura絵画教室 | 大人から子どもまで、絵画教室ならStudio Kura'
}

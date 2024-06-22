import NextLink, { LinkProps } from 'next/link'
import { Button, Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = e.currentTarget.href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }
  return (
    <Box display={'inline'} mr={2}>
      <NextLink {...props} onClick={handleScroll}>
        <Button size={'sm'} mb={2}>
          {children}
        </Button>
      </NextLink>
    </Box>
  )
}
export { ScrollLink }

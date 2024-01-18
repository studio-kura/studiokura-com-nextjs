import { Button, Link as NextLink } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

interface Props {
  text?: string
  mt?: number
  size?: string
  color?: string
  bg?: string
  hoverbg?: string
  borderRadius?: number
  hasIcon?: boolean
}

const MailButton: React.FC<Props> = ({
  text,
  mt,
  size,
  color,
  bg,
  hoverbg,
  borderRadius,
  hasIcon
}) => {
  return (
    <Button
      mt={mt}
      size={size}
      as={NextLink}
      href={'/contact'}
      borderRadius={borderRadius}
      fontWeight={600}
      color={color}
      bg={bg}
      _hover={{
        bg: hoverbg
      }}
    >
      {hasIcon && (
        <>
          <EmailIcon />
          &nbsp;
        </>
      )}
      {text}
    </Button>
  )
}
export default MailButton

MailButton.defaultProps = {
  text: 'info@studiokura.com',
  mt: 0,
  size: 'md',
  color: 'text',
  bg: 'gray.100',
  hoverbg: 'gray.200',
  borderRadius: 4,
  hasIcon: true
}

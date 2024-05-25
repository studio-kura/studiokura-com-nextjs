import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

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

const TrialButton: React.FC<Props> = ({
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
      href={'/trial'}
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
          <EditIcon />
          &nbsp;
        </>
      )}
      {text}
    </Button>
  )
}
export { TrialButton }

TrialButton.defaultProps = {
  text: '体験レッスン',
  mt: 0,
  size: 'md',
  color: 'white',
  bg: 'blue.500',
  hoverbg: 'blue.400',
  borderRadius: 4,
  hasIcon: true
}

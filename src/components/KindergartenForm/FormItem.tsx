import { WarningIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import { type ChangeEventHandler } from 'react'

interface Props {
  inputType: 'text' | 'email' | 'textarea'
  legend: string
  formWidth: string[]
  isRequired?: boolean
  isValid: boolean
  validationMessage?: string
  handler?:
    | ChangeEventHandler<HTMLInputElement>
    | ChangeEventHandler<HTMLTextAreaElement>
}
const FormItem = (props: Props) => {
  const {
    inputType,
    legend,
    formWidth,
    isRequired,
    isValid,
    validationMessage,
    handler
  } = props
  return (
    <>
      <FormControl
        mt={'2rem'}
        as={'fieldset'}
        w={formWidth}
        isRequired={isRequired}
      >
        <FormLabel as={'legend'}>{legend}</FormLabel>
        {(inputType === 'text' || inputType === 'email') && (
          <Input
            type={inputType}
            onChange={handler as ChangeEventHandler<HTMLInputElement>}
          />
        )}
        {inputType === 'textarea' && (
          <Textarea
            rows={5}
            onChange={handler as ChangeEventHandler<HTMLTextAreaElement>}
          />
        )}
        <FormHelperText>
          {!isValid && (
            <>
              <WarningIcon /> {validationMessage || '必須項目です'}
            </>
          )}
        </FormHelperText>
      </FormControl>
    </>
  )
}

export { FormItem }

import { WarningIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'

const formWidth = ['90%', '90%', '80%', '60%']

interface Props {
  inputType: 'text' | 'email' | 'textarea'
  legend: string
  isRequired?: boolean
  isValid: boolean
  validationMessage?: string
  handler?:
    | ChangeEventHandler<HTMLInputElement>
    | ChangeEventHandler<HTMLTextAreaElement>
}
const FormItem = (props: Props) => {
  const { inputType, legend, isRequired, isValid, validationMessage, handler } =
    props
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

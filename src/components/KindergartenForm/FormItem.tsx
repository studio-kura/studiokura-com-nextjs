import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { type ChangeEventHandler } from 'react';
import { LiaExclamationCircleSolid } from 'react-icons/lia';

interface Props {
  inputType: 'text' | 'email' | 'textarea';
  legend: string;
  placeholder?: string;
  formWidth: string[];
  isRequired?: boolean;
  isValid: boolean;
  validationMessage?: string;
  handler?:
    | ChangeEventHandler<HTMLInputElement>
    | ChangeEventHandler<HTMLTextAreaElement>;
}
const FormItem = (props: Props) => {
  const {
    inputType,
    legend,
    placeholder,
    formWidth,
    isRequired,
    isValid,
    validationMessage,
    handler,
  } = props;
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
            placeholder={placeholder}
            onChange={handler as ChangeEventHandler<HTMLInputElement>}
          />
        )}
        {inputType === 'textarea' && (
          <Textarea
            rows={5}
            onChange={handler as ChangeEventHandler<HTMLTextAreaElement>}
            placeholder={placeholder}
          />
        )}
        <FormHelperText>
          {!isValid && (
            <>
              <Icon as={LiaExclamationCircleSolid} />
              {validationMessage || '必須項目です'}
            </>
          )}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export { FormItem };

import { Field, Icon, Input, Textarea } from '@chakra-ui/react';
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
    <Field.Root as="fieldset" w={formWidth} mt="2rem" required={isRequired}>
      <legend style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
        {legend}
      </legend>

      {(inputType === 'text' || inputType === 'email') && (
        <Input
          type={inputType}
          placeholder={placeholder}
          onChange={handler as ChangeEventHandler<HTMLInputElement>}
          aria-invalid={!isValid}
        />
      )}

      {inputType === 'textarea' && (
        <Textarea
          rows={5}
          placeholder={placeholder}
          onChange={handler as ChangeEventHandler<HTMLTextAreaElement>}
          aria-invalid={!isValid}
        />
      )}

      {!isValid && (
        <Field.HelperText>
          <Icon as={LiaExclamationCircleSolid} me={1} />
          {validationMessage || '必須項目です'}
        </Field.HelperText>
      )}
    </Field.Root>
  );
};

export { FormItem };

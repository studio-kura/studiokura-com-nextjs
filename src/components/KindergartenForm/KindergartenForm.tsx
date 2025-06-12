import {
  ClassroomCheckboxGroup,
  FormItem,
} from '@/components/KindergartenForm';
import { type KindergartenFormData } from '@/utils';
import { Box, Button } from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';

type FormInput = {
  kindergarten: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  students?: {
    classroom1: boolean;
    classroom2: boolean;
    classroom3: boolean;
  };
  numberOfStudents?: number;
  trialDate: string;
  message: string;
};

const initialFormInput: FormInput = {
  kindergarten: '',
  name: '',
  email: '',
  address: '',
  phone: '',
  numberOfStudents: 0,
  trialDate: '',
  message: '',
};

const formWidth = ['90%', '90%', '80%', '60%'];
const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

interface Props {
  variant: 'contact' | 'request-docs' | 'trial' | 'request-estimate';
}

const KindergartenForm = (props: Props) => {
  const { variant } = props;
  const [formInput, setFormInput] = useState<FormInput>(initialFormInput);
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  const formData: KindergartenFormData = {
    contact_type: variant,
    kindergarten: formInput.kindergarten,
    name: formInput.name,
    email: formInput.email,
    address: formInput.address,
    phone: formInput.phone,
    classroom1: formInput.students?.classroom1 ? '1' : '0',
    classroom2: formInput.students?.classroom2 ? '1' : '0',
    classroom3: formInput.students?.classroom3 ? '1' : '0',
    students: `${formInput.numberOfStudents}`,
    trial_date: formInput.trialDate,
    message: formInput.message,
  };

  const handleKindergartenChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({ ...s, kindergarten: e.target.value }));
  const kindergartenIsValid = formInput.kindergarten.length > 0;

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({ ...s, name: e.target.value }));
  const nameIsValid = true;

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({ ...s, email: e.target.value }));
  const emailIsValid = emailPattern.test(formInput.email);

  const handleAddressChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({ ...s, address: e.target.value }));
  const addressIsValid = true;

  const handlePhoneChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({ ...s, phone: e.target.value }));
  const phoneIsValid = true;

  const handleClassroom1Check: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({
      ...s,
      students: {
        classroom1: e.target.checked,
        classroom2: s.students?.classroom2 ?? false,
        classroom3: s.students?.classroom3 ?? false,
      },
    }));

  const handleClassroom2Check: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({
      ...s,
      students: {
        classroom1: s.students?.classroom1 ?? false,
        classroom2: e.target.checked,
        classroom3: s.students?.classroom3 ?? false,
      },
    }));

  const handleClassroom3Check: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({
      ...s,
      students: {
        classroom1: s.students?.classroom1 ?? false,
        classroom2: s.students?.classroom2 ?? false,
        classroom3: e.target.checked,
      },
    }));

  const handleNumberOfStudentsChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const students = Number(e.target.value);
    if (!Number.isNaN(students)) {
      setFormInput((s) => ({ ...s, numberOfStudents: students }));
    }
  };

  const numberOfStudentsIsValid =
    (variant !== 'trial' && variant !== 'request-estimate') ||
    (!Number.isNaN(formInput.numberOfStudents) &&
      (formInput.numberOfStudents ?? 0) > 0);

  const handleTrialDateChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormInput((s) => ({ ...s, trialDate: e.target.value }));
  const trialDateIsValid = true;

  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setFormInput((s) => ({ ...s, message: e.target.value }));
  const messageIsValid =
    variant !== 'contact' || formInput.message.trim().length > 0;

  const formSubmittable =
    emailIsValid && nameIsValid && messageIsValid && !formWasSubmitted;

  const handleSubmit = async () => {
    setFormWasSubmitted(true);
    await fetch('/api/post-kindergarten-form', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  };

  return (
    <>
      <FormItem
        legend="園名"
        placeholder=""
        inputType="text"
        formWidth={formWidth}
        handler={handleKindergartenChange}
        isValid={kindergartenIsValid}
        isRequired
      />
      <FormItem
        legend="お名前"
        placeholder="あなたのお名前を入力してください"
        inputType="text"
        formWidth={formWidth}
        handler={handleNameChange}
        isValid={nameIsValid}
        isRequired={false}
      />
      <FormItem
        legend="メールアドレス"
        inputType="email"
        formWidth={formWidth}
        handler={handleEmailChange}
        isValid={emailIsValid}
        validationMessage="正しいメールアドレスが必要です。"
        isRequired
      />
      <FormItem
        legend="所在地"
        inputType="text"
        formWidth={formWidth}
        handler={handleAddressChange}
        isValid={addressIsValid}
        isRequired={false}
      />
      <FormItem
        legend="お電話番号"
        placeholder="090-"
        inputType="text"
        formWidth={formWidth}
        handler={handlePhoneChange}
        isValid={phoneIsValid}
        isRequired={false}
      />
      {(variant === 'trial' || variant === 'request-estimate') && (
        <>
          <ClassroomCheckboxGroup
            formWidth={formWidth}
            handleClassroom1Check={handleClassroom1Check}
            handleClassroom2Check={handleClassroom2Check}
            handleClassroom3Check={handleClassroom3Check}
          />
          <FormItem
            legend="受講生の人数"
            placeholder="半角数字"
            inputType="text"
            formWidth={formWidth}
            handler={handleNumberOfStudentsChange}
            isValid={numberOfStudentsIsValid}
            validationMessage="0より大きい半角数字を入力してください。"
            isRequired
          />
        </>
      )}
      <FormItem
        legend="希望日"
        placeholder="「3月の２週目」、「木曜日の午前中」など"
        inputType="text"
        formWidth={formWidth}
        handler={handleTrialDateChange}
        isValid={trialDateIsValid}
        isRequired={false}
      />
      <FormItem
        legend={variant === 'contact' ? 'お問い合わせ内容' : '備考'}
        inputType="textarea"
        formWidth={formWidth}
        handler={handleMessageChange}
        isValid={messageIsValid}
        isRequired={variant === 'contact'}
      />

      <Box as="fieldset" mt="2rem" w={formWidth}>
        <Button
          color="white"
          bg="blue.500"
          _hover={{ bg: 'blue.400' }}
          onClick={handleSubmit}
          disabled={!formSubmittable}
        >
          {formWasSubmitted ? '送信されました' : '送信する'}
        </Button>
      </Box>
    </>
  );
};

export { KindergartenForm };

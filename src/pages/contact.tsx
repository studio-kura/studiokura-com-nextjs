import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { type FormData } from '@/utils';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';

const formWidth = ['90%', '90%', '80%', '60%'];
const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Contact = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);
  const formData: FormData = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
  };
  const nameIsValid = nameInput.length > 0;
  const emailIsValid = emailPattern.test(emailInput);
  const messageIsValid = messageInput.length > 0;
  const formSubmittable =
    emailIsValid && nameIsValid && messageIsValid && !formWasSubmitted;

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNameInput(event.target.value);
  };
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const email = event.target.value;
    setEmailInput(email);
  };
  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setMessageInput(event.target.value);
  };
  const handleSubmit = async () => {
    setFormWasSubmitted(true);
    const apiRequest = await fetch('/api/post-contact-form', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    // const apiResponse = await apiRequest.json()
    // console.log('FORM SUBMITTED', formData, apiResponse)
  };

  return (
    <Layout title="お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          お問い合わせ
        </Heading>
      </Container>
      <Center w={'100%'}>
        <Container w={'100%'}>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>お名前</FormLabel>
            <Input type={'text'} onChange={handleNameChange} />
            <FormHelperText>
              {nameIsValid ? (
                <>
                  <CheckCircleIcon color={'green.500'} />{' '}
                  個人情報は誰とも共有しません。
                </>
              ) : (
                <>
                  <WarningIcon /> 必須項目です。
                </>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>メールアドレス</FormLabel>
            <Input type={'email'} onChange={handleEmailChange} />
            <FormHelperText>
              {emailIsValid ? (
                <>
                  <CheckCircleIcon color={'green.500'} />{' '}
                  メールアドレスは誰とも共有しません。
                </>
              ) : (
                <>
                  <WarningIcon /> 正しいメールアドレスが必要です。
                </>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>お問い合わせ内容</FormLabel>
            <Textarea rows={5} onChange={handleMessageChange} />
            <FormHelperText>
              {!messageIsValid && (
                <>
                  <WarningIcon /> 必須項目です。
                </>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl mt={'2rem'} w={formWidth}>
            <Button
              color={'white'}
              bg={'blue.500'}
              _hover={{
                bg: 'blue.400',
              }}
              onClick={handleSubmit}
              isDisabled={!formSubmittable}
            >
              {formWasSubmitted ? '送信されました' : '送信する'}
            </Button>
          </FormControl>
        </Container>
      </Center>
      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Contact;

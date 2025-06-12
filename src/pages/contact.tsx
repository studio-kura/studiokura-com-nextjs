'use client';

import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { type FormData } from '@/utils';
import {
  Button,
  Center,
  Field,
  Heading,
  Icon,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';
import { LiaCheckCircle, LiaExclamationCircleSolid } from 'react-icons/lia';

const formWidth = ['90%', '90%', '80%', '60%'];
const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Contact = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  const nameIsValid = nameInput.length > 0;
  const emailIsValid = emailPattern.test(emailInput);
  const messageIsValid = messageInput.length > 0;

  const formSubmittable =
    emailIsValid && nameIsValid && messageIsValid && !formWasSubmitted;

  const formData: FormData = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setNameInput(event.target.value);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setEmailInput(event.target.value);

  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => setMessageInput(event.target.value);

  const handleSubmit = async () => {
    setFormWasSubmitted(true);
    await fetch('/api/post-contact-form', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  };

  return (
    <Layout title="お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />

      <Container height="200px" minW="100%">
        <Heading mt="1em" size={['2xl', '2xl', '2xl']}>
          お問い合わせ
        </Heading>
      </Container>

      <Center minW="100%">
        <Container minW="100%" px="0" mx="0">
          {/* Name Field */}
          <Field.Root mt="2rem" w={formWidth}>
            <Field.Label>お名前</Field.Label>
            <Input type="text" onChange={handleNameChange} />
            <Text
              fontSize="sm"
              mt={1}
              color={nameIsValid ? 'gray.600' : 'red.500'}
            >
              {nameIsValid ? (
                <>
                  <Icon as={LiaCheckCircle} color="green.500" />{' '}
                  個人情報は誰とも共有しません。
                </>
              ) : (
                <>
                  <Icon as={LiaExclamationCircleSolid} /> 必須項目です。
                </>
              )}
            </Text>
          </Field.Root>

          {/* Email Field */}
          <Field.Root mt="2rem" w={formWidth}>
            <Field.Label>メールアドレス</Field.Label>
            <Input type="email" onChange={handleEmailChange} />
            <Text
              fontSize="sm"
              mt={1}
              color={emailIsValid ? 'gray.600' : 'red.500'}
            >
              {emailIsValid ? (
                <>
                  <Icon as={LiaCheckCircle} color="green.500" />{' '}
                  メールアドレスは誰とも共有しません。
                </>
              ) : (
                <>
                  <Icon as={LiaExclamationCircleSolid} />{' '}
                  正しいメールアドレスが必要です。
                </>
              )}
            </Text>
          </Field.Root>

          {/* Message Field */}
          <Field.Root mt="2rem" w={formWidth}>
            <Field.Label>お問い合わせ内容</Field.Label>
            <Textarea rows={5} onChange={handleMessageChange} />
            {!messageIsValid && (
              <Text fontSize="sm" mt={1} color="red.500">
                <Icon as={LiaExclamationCircleSolid} /> 必須項目です。
              </Text>
            )}
          </Field.Root>

          {/* Submit Button */}
          <Field.Root mt="2rem" w={formWidth}>
            <Button
              color="white"
              bg="blue.500"
              _hover={{ bg: 'blue.400' }}
              onClick={handleSubmit}
              disabled={!formSubmittable}
            >
              {formWasSubmitted ? '送信されました' : '送信する'}
            </Button>
          </Field.Root>
        </Container>
      </Center>

      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Contact;

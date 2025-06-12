import { Checkbox, CheckboxGroup, Field, Stack } from '@chakra-ui/react';
import { type ChangeEventHandler } from 'react';

interface Props {
  formWidth: string[];
  isRequired?: boolean;
  handleClassroom1Check?: ChangeEventHandler<HTMLInputElement>;
  handleClassroom2Check?: ChangeEventHandler<HTMLInputElement>;
  handleClassroom3Check?: ChangeEventHandler<HTMLInputElement>;
}

const ClassroomCheckboxGroup = (props: Props) => {
  const {
    formWidth,
    isRequired,
    handleClassroom1Check,
    handleClassroom2Check,
    handleClassroom3Check,
  } = props;

  return (
    <Field.Root as="fieldset" w={formWidth} mt="2rem" required={isRequired}>
      <Field.Label>レッスンを受けられる学年</Field.Label>

      <CheckboxGroup>
        <Stack gap={[1, 5]} direction={['column', 'row']}>
          <Checkbox.Root onChange={handleClassroom1Check}>
            <Checkbox.Control />
            <Checkbox.Label>年少</Checkbox.Label>
          </Checkbox.Root>

          <Checkbox.Root onChange={handleClassroom2Check}>
            <Checkbox.Control />
            <Checkbox.Label>年中</Checkbox.Label>
          </Checkbox.Root>

          <Checkbox.Root onChange={handleClassroom3Check}>
            <Checkbox.Control />
            <Checkbox.Label>年長</Checkbox.Label>
          </Checkbox.Root>
        </Stack>
      </CheckboxGroup>
    </Field.Root>
  );
};

export { ClassroomCheckboxGroup };

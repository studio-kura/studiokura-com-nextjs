import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react';
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
    <>
      <FormControl
        mt={'2rem'}
        as={'fieldset'}
        w={formWidth}
        isRequired={isRequired}
      >
        <FormLabel as={'legend'}>レッスンを受けられる学年</FormLabel>
        <CheckboxGroup>
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox onChange={handleClassroom1Check}>年少</Checkbox>
            <Checkbox onChange={handleClassroom2Check}>年中</Checkbox>
            <Checkbox onChange={handleClassroom3Check}>年長</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormControl>
    </>
  );
};

export { ClassroomCheckboxGroup };

// @flow
import React, { type Element } from 'react';
import styled from 'styled-components';

import theme from '../theme';

const getDefaultStyles = t => styled[t]`
  border-radius: ${props => props.theme.boxBorderRadius};
  border: none;
  background-color: ${props => props.bgColor || props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.text};
  padding: 15px;
  padding-right: ${props => (props.withRightElement ? '85px' : '15px')};
  width: 100%;
  outline: none;
  font-family: ${props => props.theme.fontFamily};

  ::placeholder {
    opacity: 0.5;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const RightElement = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const Input = getDefaultStyles('input');
const Textarea = getDefaultStyles('textarea');

type Props = {
  inputType?: 'input' | 'textarea',
  value: string,
  onChange?: string => void,
  onFocus?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  rows?: number,
  disabled?: boolean,
  type?: string,
  step?: number,
  name?: string,
  renderRight?: () => Element<*> | null,
  bgColor?: string,
};

export const InputComponent = ({
  inputType,
  bgColor,
  onChange = () => {},
  renderRight = () => null,
  ...props
}: Props) => {
  const rightElement = renderRight();

  const inputTypes = {
    input: () => (
      <Input
        onChange={evt => onChange(evt.target.value)}
        withRightElement={Boolean(rightElement)}
        bgColor={bgColor}
        {...props}
      />
    ),
    textarea: () => (
      <Textarea onChange={evt => onChange(evt.target.value)} bgColor={bgColor} {...props} />
    ),
  };

  if (!Object.keys(inputTypes).find(key => key === inputType)) {
    throw new Error(`Invalid input type: ${String(inputType)}`);
  }

  return (
    <Wrapper>
      {inputTypes[inputType || 'input']()}
      {rightElement && <RightElement>{rightElement}</RightElement>}
    </Wrapper>
  );
};

InputComponent.defaultProps = {
  inputType: 'input',
  rows: 4,
  disabled: false,
  type: 'text',
  name: '',
  renderRight: () => null,
  onChange: () => {},
  onFocus: () => {},
  step: 1,
  bgColor: theme.colors.inputBackground,
};

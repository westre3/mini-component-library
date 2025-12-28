import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const NATIVE_INPUT_STYLES = {
  small: {
    height: '24px',
    fontSize: '14px',
    borderBottom: `1px solid ${COLORS.black}`,
    paddingLeft: '24px',
  },
  large: {
    height: '36px',
    fontSize: '18px',
    borderBottom: `2px solid ${COLORS.black}`,
    paddingLeft: '36px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const [selectId] = useState(crypto.randomUUID());

  return (
    <Wrapper
      onClick={() => {
        document.querySelector('#' + selectId).focus();
      }}>
      <VisuallyHidden>
        <label for={selectId}>{label}</label>
      </VisuallyHidden>
      <NativeInput
        type='text'
        id={selectId}
        style={{
          ...NATIVE_INPUT_STYLES[size],
          width,
        }}
        placeholder={placeholder}
      />
      {size === 'small' ? <SmallIcon id={icon} /> : <LargeIcon id={icon} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  --color: ${COLORS.gray700};

  &:hover {
    --color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  padding: 0;
  border: 0;
  font-weight: 700;
  color: var(--color);
  transition: color 200ms linear;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const SmallIcon = ({ id }) => {
  return (
    <StyledIcon
      id={id}
      size={16}
      style={{
        height: '16px',
      }}
    />
  );
};

const LargeIcon = ({ id }) => {
  return (
    <StyledIcon
      id={id}
      size={24}
      style={{
        height: '24px',
      }}
    />
  );
};

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  color: var(--color);
  transition: color 200ms linear;
`;

export default IconInput;

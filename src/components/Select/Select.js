import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Icon
        id='chevron-down'
        size='20'
        strokeWidth='2'
        style={{
          position: 'absolute',
          top: '50%',
          right: '16px',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  transition: color 200ms linear;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const NativeSelect = styled.select`
  font-weight: 400;
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  border: 0;
  border-radius: 8px;
  padding-block: 12px;
  padding-left: 16px;
  padding-right: 52px;
  appearance: none;
  cursor: pointer;
  aria-label: ${props => props.label};
`;

export default Select;

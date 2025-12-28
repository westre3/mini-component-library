/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const [labelId] = useState(crypto.randomUUID());

  let Bar;
  if (size === 'large') {
    Bar = LargeOuterBar;
  } else if (size === 'medium') {
    Bar = MediumOuterBar;
  } else {
    Bar = SmallOuterBar;
  }

  return (
    <>
      <VisuallyHidden>
        <span id={labelId}>Progress Bar</span>
      </VisuallyHidden>
      <Bar role='progressbar' aria-labelledby={labelId} aria-valuenow={value}>
        <InnerBarWindow>
          <InnerBar percentage={value} />
        </InnerBarWindow>
      </Bar>
    </>
  );
};

const OuterBar = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const InnerBarWindow = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const InnerBar = styled.div`
  width: ${props => props.percentage + '%'};
  height: 100%;
  background-color: ${COLORS.primary};
`;

const LargeOuterBar = styled(OuterBar)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

const MediumOuterBar = styled(OuterBar)`
  height: 12px;
  border-radius: 4px;
`;

const SmallOuterBar = styled(OuterBar)`
  height: 8px;
  border-radius: 4px;
`;

export default ProgressBar;

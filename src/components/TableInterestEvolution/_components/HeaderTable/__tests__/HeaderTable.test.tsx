import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Wrapper } from '@resources/helpers/tests/Wrapper';

import { HeaderTable } from '..';

describe('HeaderTable Tests', () => {
  it('should be render HeaderTable', () => {
    render(
      <Wrapper>
        <HeaderTable />
      </Wrapper>,
    );

    const headerTable = screen.getByTestId('headerTable');

    expect(headerTable).toBeTruthy();
  });
});

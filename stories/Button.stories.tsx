import * as React from 'react';
import { Button, useTheme } from '@material-ui/core';

export default {
  title: 'Components',
  component: Button,
};

export const ButtonComponent: React.VFC<{}> = () => {
    const theme = useTheme()
    console.log({theme});

  return (
    <div>
      <Button>Primary</Button>
    </div>
  );
};

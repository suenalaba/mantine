import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import 'dayjs/locale/ru';
import { DEFAULT_THEME } from '@mantine/core';
import { Month } from './Month';

function WrappedMonth(
  props: Omit<React.ComponentPropsWithoutRef<typeof Month>, 'selected' | 'onDayClick' | 'month'>
) {
  const [value, onChange] = useState(new Date());
  return <Month month={value} value={value} onChange={onChange} {...props} />;
}

storiesOf('@mantine/dates/Month', module)
  .add('General usage', () => (
    <div style={{ maxWidth: 240, padding: 40 }}>
      <WrappedMonth autoFocus locale="ru" />
    </div>
  ))
  .add('Day style', () => (
    <div style={{ maxWidth: 240, padding: 40 }}>
      <WrappedMonth
        autoFocus
        locale="ru"
        dayStyle={(date) =>
          date.getDate() === new Date().getDate()
            ? { backgroundColor: DEFAULT_THEME.colors.red[0] }
            : {}
        }
      />
    </div>
  ));

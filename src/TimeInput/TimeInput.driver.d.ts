import * as React from 'react';
import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface TimeInputDriver extends BaseDriver {
  getValue: () => string;
  isDisabled: () => boolean;
  clickTickerUp: () => void;
  clickTickerDown: () => void;
  isAmPmIndicatorExist: () => boolean;
  toggleAmPmIndicator: () => void;
  getAmPmIndicatorText: () => string;
  getCustomSuffix: () => React.ReactNode;
  isRtl: () => boolean;
  setValue: (text: string) => void;
  blur: () => void;
}

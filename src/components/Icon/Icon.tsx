import * as React from 'react';
import cx from 'classnames';

import * as box from './box';
import * as home from './home';
import * as zalopay from './zalopay';
import * as facebook from './facebook/index';

export enum IconName {
  BOX,
  HOME,
  ZALOPAY,
  FACEBOOK,
}

interface Props {
  name: IconName;
  large?: boolean;
}

const iconMap = {
  [IconName.BOX]: box,
  [IconName.HOME]: home,
  [IconName.ZALOPAY]: zalopay,
  [IconName.FACEBOOK]: facebook,
};

export const Icon: React.FC<Props> = props => {
  const icon = iconMap[props.name];
  return (
    <img
      alt="icon"
      className={cx('inline mr-2 w-8 h-8', props.large && 'w-12 h-12')}
      src={props.large ? icon.large : icon.normal}
    />
  );
};

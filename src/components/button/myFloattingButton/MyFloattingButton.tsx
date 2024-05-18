'use client';

import { useState } from 'react';
import { IconType } from 'react-icons';
import MyButton from '../myButton/MyButton';
import './style.css';
import MyCardBox from '@/components/card/my-card/MyCardBox';

interface IProps {
  icon: IconType;
  options: any[];
}

const mainButtonStyle = { minWidth: '100%', minHeight: '100%' };

export default function MyFloattingButton(props: IProps) {
  const [showItems, setShowItems] = useState(false);

  const onMainButtonEnter = (_: any) => setShowItems(true);
  const onMainButtonLeave = (_: any) => setShowItems(false);

  return (
    <div className='mfb-body' onMouseLeave={onMainButtonLeave}>
      {
        showItems && (
          <MyCardBox>
            <ul className='mfb-items'>
              {props?.options?.map((component) => <li>{component}</li>)}
            </ul>
          </MyCardBox>
        )
      }
      <div className='mfb-main-button'>
        <MyButton
          onMouseEnter={onMainButtonEnter}
          theme='dark'
          style={mainButtonStyle}>
          {<props.icon />}
        </MyButton>
      </div>
    </div>
  )
}
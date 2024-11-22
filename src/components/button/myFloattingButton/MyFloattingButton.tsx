'use client';

import MyCardBox from '@/components/card/my-card/MyCardBox';
import { ButtonHTMLAttributes, useState } from 'react';
import MyButton from '../myButton/MyButton';
import './style.css';

interface IProps {
  icon: any;
  options?: any[];
  attributes: ButtonHTMLAttributes<HTMLButtonElement>
}

const mainButtonStyle = {
  minWidth: '100%',
  minHeight: '100%'
};

export default function MyFloattingButton(props: IProps) {
  const [showItems, setShowItems] = useState(false);

  const onMainButtonEnter = (_: any) => setShowItems(true);
  const onMainButtonLeave = (_: any) => setShowItems(false);

  return (
    <div className='mfb-body' onMouseLeave={onMainButtonLeave}>
      {
        showItems && props.options && (
          <MyCardBox>
            <ul className='mfb-items'>
              {props?.options?.map((component) => <li>{component}</li>)}
            </ul>
          </MyCardBox>
        )
      }
      <div className='mfb-main-button'>
        <MyButton
          {...props.attributes}
          onMouseEnter={onMainButtonEnter}
          theme='dark'
          style={mainButtonStyle}>
          {props.icon}
        </MyButton>
      </div>
    </div>
  )
}
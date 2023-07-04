'use client';

import {Htag, Button, P, Tag} from "@/components";
import {useEffect, useState} from 'react';
import {Rating} from '../components/Rating/Rating';
import {withLayout} from '../layout/Layout';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);
  useEffect(() => {
    console.log('first ' + counter);
  
    return function cleanup() {
      console.log('Unmount');
    };
  }, []);
  
  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Htag tag='h2'>Текст</Htag>
      <Htag tag='h3'>Текст</Htag>
      <Button apperance="primary" arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button apperance="ghost" arrow='right'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P size='m'>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='m' color='grey'>Средний</Tag>
      <Tag size='s' color='green'>Средний</Tag>
      <Tag size='m' color='red'>Средний</Tag>
      <Tag color='primary'>Средний</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);

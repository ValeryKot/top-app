'use client';

import {Htag, Button, P, Tag} from "@/components";
import {useState} from 'react';
import {Rating} from '../Rating/Rating';
import {MenuItem} from "@/interfaces/menu.interface";


export default function HomePage() {


  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Htag tag='h2'>Текст</Htag>
      <Htag tag='h3'>Текст</Htag>
      <Button apperance="primary" arrow='right'>Кнопка</Button>
      <Button apperance="ghost" arrow='right'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P size='m'>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='m' color='grey'>Средний</Tag>
      <Tag size='s' color='green'>Средний</Tag>
      <Tag size='m' color='red'>Средний</Tag>
      <Tag color='primary'>Средний</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
            {/* <ul>
        {menu.map((m) => (
         <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
         ))}
      </ul> */}
    </>
  );
}



// async function Menus() {
//   // Wait for the albums promise to resolve
//   const firstCategory = 0;
//   const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
//     firstCategory
//   });
 
//   return (
//     <ul>
//       {menu.map((m) => (
//         <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
//       ))}
//     </ul>
//   );
// }

// export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
//   const firstCategory = 0;
//   const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
//         firstCategory
//       });
//   return {
//     props: {
//       menu,
//       firstCategory,
//     }
//   };
// };

interface HomePageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}

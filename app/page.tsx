import { Htag, Button, P } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Текст</Htag>
      <Htag tag='h2'>Текст</Htag>
      <Htag tag='h3'>Текст</Htag>
      <Button apperance="primary" arrow='right'>Кнопка</Button>
      <Button apperance="ghost" arrow='right'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P size='m'>Средний</P>
      <P size='s'>Маленький</P>
    </div>
  );
}

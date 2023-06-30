import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";
import {Htag, Button, P, Tag} from "@/components";

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render(): JSX.Element  {
        return (
            <Html lang="EN">
                <Head>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    <div>
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
    </div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
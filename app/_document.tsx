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
                </body>
            </Html>
        );
    }
}

export default MyDocument;
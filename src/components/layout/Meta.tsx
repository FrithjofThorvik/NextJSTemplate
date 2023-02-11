import Head from "next/head";

interface IMetaProps {
  title: string;
  keywords: string;
  description: string;
}

const Meta: React.FC<IMetaProps> = ({
  title,
  keywords,
  description,
}): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        href={`https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@100;200;300;400;600;700;800;900&display=swap700&display=swap`}
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;

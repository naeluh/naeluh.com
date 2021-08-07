import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Head from 'next/head';

const Page = ({ data }) => {
  return (
    <section>
      <Head>
        <title>{data.Title}</title>
        <meta name="title" content={data.Title} />
        <meta name="description" content={data.Body} />
      </Head>
      <div key={data.id}>
        <h1>{data.Title}</h1>
        <div className="basicPage">
          <ReactMarkdown children={data.Body} rehypePlugins={[rehypeRaw]} />
        </div>
      </div>
    </section>
  );
};

export default Page;

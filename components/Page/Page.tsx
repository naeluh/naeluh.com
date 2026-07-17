import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Gradient from '../Gradient';

const Page: React.FC<{ data: { Title: string; Body: string; id: string } }> = ({
  data,
}) => {
  return (
    <section>
      <div key={data.id}>
        <h1>{data.Title}</h1>
        <div className="basicPage">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data.Body}</ReactMarkdown>
        </div>
      </div>
      <div className="id--container">
        <div className="name">Nick Hulea</div>
        <div className="phone">
          <a href="tel:330-207-3406">330-207-3406</a>
        </div>
        <div className="email">
          <a href="mailto:naeluh@gmail.com">naeluh@gmail.com</a>
        </div>
        <div className="address">
          <address>724 Echo Park Ave. Apt. B Los Angeles, CA 90026</address>
        </div>
      </div>
      <Gradient />
    </section>
  );
};

export default Page;

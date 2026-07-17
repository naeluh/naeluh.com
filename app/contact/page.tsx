import type { Metadata } from 'next';
import Form from '../../components/Form';
import Gradient from '../../components/Gradient';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <>
      <Form />
      <Gradient />
    </>
  );
}

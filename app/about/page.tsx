import type { Metadata } from 'next';
import Page from '../../components/Page';
import { getMarkdownPage } from '../../lib/getMarkdownPage.js';

export const metadata: Metadata = {
  title: 'About',
  description: 'Professional experience, skills, and background of Nick Hulea',
};

export default function About() {
  const page = getMarkdownPage('about', 'About');
  return <Page data={page} />;
}

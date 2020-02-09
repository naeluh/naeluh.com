import App from '../components/App';
import InfoBox from '../components/InfoBox';
import Header from '../components/Header';
import Submit from '../components/Submit';
import PostList from '../components/PostList';
import { withApollo } from '../lib/apollo';
import { BaseStyles, Box, Heading, Text } from '@primer/components';

const ClientOnlyPage = (props) => (
  <App>
    <Header />
    <BaseStyles>
      <Text as='p' fontWeight='bold'>
        bold
      </Text>
      <Text as='p' color='red.6'>
        red color
      </Text>
      <Text as='p' color='white' bg='gray.9' p={2}>
        white on black
      </Text>
      <Box m={4}>
        <Heading mb={2}>Hello, world!</Heading>
        <p>This will get Primer text styles.</p>
      </Box>
      <InfoBox>
        ℹ️ This example shows how to disable apollos query fetching on the server. If you{' '}
        <a href='/client-only'>reload</a> this page, you will see a loader since Apollo didn't fetch any data on the
        server. This allows{' '}
        <a
          href='https://nextjs.org/blog/next-9#automatic-static-optimization'
          target='_blank'
          rel='noopener noreferrer'
        >
          automatic static optimization
        </a>
        .
      </InfoBox>
      <Submit />
      <PostList />
    </BaseStyles>
  </App>
);

export default withApollo(ClientOnlyPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: false
});

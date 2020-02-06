import React from 'react'
import withApollo from '../../lib/withApollo'
import App from '../../components/App'
import Header from '../../components/Header'
import PostList from '../../components/PostList'
import Footer from '../../components/Footer'

class BlogIndex extends React.Component {
  render () {
    return (
      <App>
        <Header />
        <PostList />
        <Footer />
      </App>
    )
  }
}

export default withApollo(BlogIndex)

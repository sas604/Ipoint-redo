import styled from 'styled-components';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import fetchEntries from '../utils/contentful';

const BlogGridStyles = styled.ul`
  padding: 0;
  margin: 3rem -1.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1.5rem;
`;

export default function Blog({ posts }) {
  return (
    <Layout title="Blog & News">
      <main>
        <section>
          <h1> Blog & News</h1>
          <p style={{ fontSize: '1.235rem' }}>
            Read the latest news, trends, tips, and analysis from our team of
            experts.
          </p>

          {/* <div>
            <span>Filter by Category </span>
            <select name="category">
              <option value="news">News</option>
              <option value="opinion">Expert Opinion</option>
            </select>
          </div> */}
          <BlogGridStyles>
            {posts.map((post, i) => (
              <PostCard key={i} post={post} />
            ))}
          </BlogGridStyles>
        </section>
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetchEntries({ content_type: 'blogPost' });
  const posts = await res.map((el) => ({
    ...el.fields,
    date: el.sys.createdAt,
  }));

  return {
    props: {
      posts,
    },
  };
}

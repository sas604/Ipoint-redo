import Image from 'next/image';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import fetchEntries from '../../utils/contentful';
import Layout from '../../components/layout';
import PostCardFooter from '../../styles/post-card-footer';

const PostSectionStyles = styled.section`
  padding-top: 4.5rem;
  .divider {
    margin: 3rem 0 1.5rem;
    max-width: 750px;
    height: 3px;
    background-color: var(--dark-red);
  }
`;
export default function Post({ post }) {
  const created = new Date(post.displayDate);
  return (
    <Layout title={post.slug}>
      <main>
        <PostSectionStyles>
          <h1>{post.title}</h1>

          {documentToReactComponents(post.postContent)}
          <div className="divider" />
          <PostCardFooter>
            <Image
              width="75"
              height="75"
              objectFit="cover"
              objectPosition="top"
              alt={post.author.fields.name}
              src={`https:${post.author.fields.avatar.fields.file.url}`}
            />
            <span>
              By {post.author.fields.name}
              <br />
              <span
                style={{ margin: 0 }}
              >{`${created.getMonth()} / ${created.getDay()} / ${created.getFullYear()}`}</span>
            </span>

            <span>
              Category
              <br />
              <span>{post.category}</span>
            </span>
            <div className="question">
              <span>
                Have A question ? <Link href="/contact">Contact us </Link>
              </span>
            </div>
          </PostCardFooter>
        </PostSectionStyles>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetchEntries({ content_type: 'blogPost' });
  const paths = await res.map((el) => ({
    params: { slug: el.fields.slug },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetchEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });
  const post = await res.reduce((acc, el) => el.fields, {});

  return {
    props: {
      post,
    },
  };
}

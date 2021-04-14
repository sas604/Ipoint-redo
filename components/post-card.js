import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import PostCardFooter from '../styles/post-card-footer';
import ButtonStyles from '../styles/button';

const PostCardStyles = styled.div`
  background-color: ${({ category }) =>
    category === 'news' ? '#30465ddb' : '#b61717c7'};
  color: white;
  position: relative;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  img {
    z-index: -1;
  }
  h2 {
    line-height: 2.25rem;
  }
  p {
    margin-top: 1.5rem;
  }
`;
const ReadMoreStyles = styled(ButtonStyles)`
  z-index: 99;
  max-width: 150px;
  margin-bottom: 1.5rem;
  :hover {
    background-color: white;
    color: var(--dark-blue);
  }
`;

const PostCard = ({ post }) => {
  const firstParagraph = post.postContent.content.find(
    (el) => el.nodeType === 'paragraph'
  );
  const descPrev = firstParagraph.content[0].value.slice(0, 160);
  const preview = descPrev.slice(0, descPrev.lastIndexOf(' '));
  const created = new Date(post.date);
  return (
    <PostCardStyles category={post.category}>
      <Image
        layout="fill"
        objectFit="cover"
        src={`https:${post.postImage.fields.file.url}`}
      />
      <h2>{post.title}</h2>
      <p>{preview} ...</p>
      <Link href={`/blog/${post.slug}`} passHref>
        <ReadMoreStyles
          category={post.category}
          color="white"
          border="1px solid white"
          as="a"
        >
          Read More
        </ReadMoreStyles>
      </Link>
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
      </PostCardFooter>
    </PostCardStyles>
  );
};
export default PostCard;

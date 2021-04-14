import styled from 'styled-components';

const PostCardFooter = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  max-width: 700px;
  * + * {
    margin-left: 1rem;
  }
  br + span {
    margin: 0;
    text-transform: uppercase;
  }
  && img {
    z-index: unset;
    clip-path: circle();
  }
  div {
    margin-left: auto;
  }
`;
export default PostCardFooter;

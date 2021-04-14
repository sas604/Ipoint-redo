import styled from 'styled-components';

const PostCardFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
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
  .question {
    text-align: end;
    flex: 100;
    a {
      text-decoration: none;
      color: var(--pale-red);
      :hover {
        color: var(--red);
      }
    }
  }
`;
export default PostCardFooter;

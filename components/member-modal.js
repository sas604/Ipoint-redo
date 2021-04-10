import Image from 'next/image';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import ButtonStyles from '../styles/button';

const ModalStyles = styled.div`
  overflow: hidden;
  position: absolute;
  background-color: white;
  width: 100%;
  min-height: 100%;
  z-index: 3;
  padding: 1.5rem;
  border: 2px solid var(--dark-red);
  box-shadow: 0px 10px 13px -7px #00000059;
  .members__photo {
    position: relative;
    width: 30vw;
    height: 40vw;
    max-width: 150px;
    max-height: 196px;
    float: left;
    margin-right: 1.5rem;
  }
`;
const CloseBtn = styled(ButtonStyles)`
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0;
  position: absolute;
  z-index: 2;
  margin: 0;
  top: 10px;
  right: 18px;
  border: none;
  :hover {
    background-color: transparent;
    color: var(--red);
  }
`;
const MemberModal = ({ close, style, member }) => (
  <ModalStyles style={style}>
    <CloseBtn onClick={() => close(false)}>
      <CgClose />
    </CloseBtn>
    <div className="members__photo">
      {member.avatar && (
        <Image
          alt={member.name}
          layout="fill"
          objectFit="cover"
          src={`https:${member.avatar?.fields.file.url}`}
          objectPosition="center"
        />
      )}
    </div>
    <h3>{member.name}</h3>
    <p>{member.bio}</p>
  </ModalStyles>
);

export default MemberModal;

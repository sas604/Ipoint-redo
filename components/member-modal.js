import Image from 'next/image';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import { animated } from 'react-spring';
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
  right: 18px;
  border: none;
`;
const MemberModal = ({ close, style }) => (
  <ModalStyles style={style}>
    <CloseBtn onClick={() => close(false)}>
      <CgClose />
    </CloseBtn>
    <div className="members__photo">
      <Image
        alt="bob"
        layout="fill"
        objectFit="cover"
        src={`/bio${1}.jpg`}
        objectPosition="center"
      />
    </div>
    <h3>Bob Lowes</h3>
    <p>
      A former City Manager and Redevelopment Director, over the last twenty
      years Bob has become influential and is well received in the local,
      regional and state political arenas. He has guided over one thousand
      public agencies and private sector clients in obtaining approvals and
      financing. A nationally recognized real estate and economic development
      expert in transactions with the public sector, Bob specializes in matching
      private sector real estate opportunities with public sector land use
      policies, regulations and financing/incentive programs.
    </p>
  </ModalStyles>
);

export default MemberModal;

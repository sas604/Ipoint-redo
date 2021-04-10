import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { CgArrowsExpandLeft } from 'react-icons/cg';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import ButtonStyles from '../styles/button';
import MemberModal from '../components/member-modal';
import fetchEntries from '../utils/contentful';

const team = ['Bob Lowes', 'James Banks', 'Mary Rodiguez', 'Tyler McNabb'];
const WhoSectionStyles = styled.section`
  max-width: 600px;
  overflow: hidden;
  a {
    float: right;
  }
`;
const TeamStyles = styled.section`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    h1 {
      grid-column: 1/-1;
    }
  }

  p {
    margin-bottom: 1.5rem;
    grid-column: 2/-1;
    align-self: center;
  }
  .members {
    grid-row: 2;
    max-width: 450px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, minmax(150px, 250px));
    gap: 1.5rem;
    position: relative;
  }
  .members__description {
    position: absolute;
    z-index: 5;
  }
  .members__photo {
    position: relative;
  }
`;

const ExpandBtn = styled(ButtonStyles)`
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0;
  position: absolute;
  z-index: 2;
  margin: 0.5rem;
  :hover {
    background-color: transparent;
    color: var(--red);
  }
`;

const Animated = animated(MemberModal);

export default function Home({ members }) {
  const [memberModal, setMemberModal] = useState(false);
  const transitions = useTransition(memberModal, {
    from: { position: 'absolute', opacity: 0, zIndex: 99 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Head>
        <title>Ipoint</title>
      </Head>
      <main>
        <WhoSectionStyles>
          <h1>Who We Are</h1>
          <p>
            IPoint Advisors is a comprehensive advocacy, outreach and technology
            management firm serving both public agencies and private sector
            entities poised to transact business with these agencies. First and
            foremost we are proactive partners with our advocacy clients. Our
            seasoned professional staff is well-versed in public affairs and is
            comprised of individuals that currently hold or have held positions
            as Mayor, Council Member, Commissioner and City Manager. These same
            individuals collectively offer our clients expertise in marketing,
            development and technology.
          </p>
          <Link href="/services" passHref>
            <ButtonStyles as="a">Learn more</ButtonStyles>
          </Link>
        </WhoSectionStyles>
        <TeamStyles>
          <h1>The Team</h1>
          <p>
            The IPoint Advisors professional team is proactive, fosters a
            partnership spirit with our clients, and is comprised of exceedingly
            competent, politically savvy and highly experienced individuals.
            Collectively and individually our advisors work tirelessly on our
            clients behalf to represent their interests with integrity, with a
            constant eye on the desired outcome.
          </p>
          <div className="members ">
            {transitions(
              (props, item, key) =>
                item && (
                  <Animated
                    key={key}
                    style={props}
                    member={memberModal}
                    close={setMemberModal}
                  />
                )
            )}
            {members.map((member, i) => (
              <div key={i} className="members__photo">
                <ExpandBtn
                  border="none"
                  color="var(--red)"
                  onClick={() => setMemberModal(members[i])}
                >
                  <CgArrowsExpandLeft />
                </ExpandBtn>
                <Image
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  src={`https:${member.avatar.fields.file.url}`}
                  objectPosition="center"
                />
              </div>
            ))}
          </div>
        </TeamStyles>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetchEntries('members');
  const members = await res.map((p) => p.fields);

  return {
    props: {
      members,
    },
  };
}

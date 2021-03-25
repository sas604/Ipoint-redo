import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { CgArrowsExpandLeft } from 'react-icons/cg';
import ButtonStyles from '../styles/button';

const team = ['Bob Lowes', 'James Banks', 'Mary Rodiguez', 'Tyler McNabb'];
const WhoSectionStyles = styled.section`
  max-width: 600px;
  overflow: hidden;
  a {
    float: right;
  }
`;
const TeamStyles = styled.section`
  p {
    margin-bottom: 1.5rem;
  }
  .members {
    max-width: 450px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .members__photo {
    position: relative;
    aspect-ratio: 3/4;
  }
`;

const ExpandBtn = styled(ButtonStyles)`
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0;
  position: absolute;
  z-index: 2;
  margin: 0;
`;
export default function Home() {
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
            {team.map((member, i) => (
              <div key={i} className="members__photo">
                <ExpandBtn border="none" color="var(--red)">
                  <CgArrowsExpandLeft />
                </ExpandBtn>
                <Image
                  alt={member}
                  layout="fill"
                  objectFit="cover"
                  src={`/bio${i + 1}.jpg`}
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

import Link from 'next/link';
import Image from 'next/image';
import { CgArrowsExpandLeft } from 'react-icons/cg';
import { useState } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import MemberModal from '../components/member-modal';
import Layout from '../components/layout';
import ButtonStyles from '../styles/button';
import fetchEntries from '../utils/contentful';

import {
  WhoSectionStyles,
  TeamStyles,
  ExpandBtn,
  ServiceGridStyle,
  ClientStyle,
  ClientStripeStyle,
} from '../styles/home-page-style';
import ServiceCard from '../components/service-card';

const Animated = animated(MemberModal);

export default function Home({ members, services, clients }) {
  const [memberModal, setMemberModal] = useState(false);
  const trail = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: -1950 },
    config: { duration: 15000 },
  });
  const transitions = useTransition(memberModal, {
    from: { position: 'absolute', opacity: 0, zIndex: 99 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <Layout>
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
                  aria-label="expand"
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
        <section>
          <h1>What We Offer</h1>
          <ServiceGridStyle>
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.name}
                desc={service.description}
                category={service.category}
              />
            ))}
          </ServiceGridStyle>
        </section>
        <ClientStripeStyle>
          <h1>Our Partners</h1>
          <div>
            <animated.div style={trail}>
              {clients.map((client, i) => (
                <ClientStyle key={`client-${i}`}>{client.name}</ClientStyle>
              ))}
            </animated.div>
          </div>
        </ClientStripeStyle>
      </main>
    </Layout>
  );
}

// get members from contentful
export async function getStaticProps() {
  const membersPromise = fetchEntries({ content_type: 'member' });
  const servicePromise = fetchEntries({
    content_type: 'service',
    'fields.icon[exists]': true,
  });
  const partnersPromise = fetchEntries({ content_type: 'clients' });
  const data = await Promise.all([
    membersPromise,
    servicePromise,
    partnersPromise,
  ]);
  const [members, services, clients] = await data.map((arr) =>
    arr.map((el) => el.fields)
  );

  return {
    props: {
      members,
      services,
      clients,
    },
  };
}

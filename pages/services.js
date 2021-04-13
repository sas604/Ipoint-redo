import Image from 'next/image';
import styled from 'styled-components';
import Layout from '../components/layout';
import fetchEntries from '../utils/contentful';

const ServiceStyles = styled.section`
  padding: 4.5rem 0;
  h2 {
    letter-spacing: 1px;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .image {
    color: white;
    padding: 9rem 3rem;
    position: relative;
    img {
      z-index: -1;
    }
  }
  ul {
    margin-top: 3rem;
    padding: 0;
  }
  span {
    font-weight: 700;
  }
  li + li {
    margin-top: 1.5rem;
  }
`;
export default function Services({ services }) {
  return (
    <Layout title="services">
      <main>
        <section>
          <h1>Services</h1>
          <ServiceStyles id="private">
            <div className="image">
              <Image
                src="/private.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <h2>Private Sector</h2>
              <p>
                Working with private sector organizations to support and promote
                their endeavor in the public sector arena, IPoint Advisors
                provides the following services that are tailored to meet our
                clients' specific objectives:
              </p>
            </div>

            <ul>
              {services
                .filter((service) => service.category === 'private')
                .map((service, i) => (
                  <li key={i}>
                    <p>
                      <span>{service.name}: </span> {service.description}
                    </p>
                  </li>
                ))}
            </ul>
          </ServiceStyles>
          <ServiceStyles id="public">
            <div className="image">
              <Image
                src="/public.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <h2>Public Sector</h2>
              <p>
                IPoint Advisors' professional staff is highly competent in
                developing and implementing programs that serve our public
                sector clients. We apply our many years of public service
                experience and comprehensive understanding of public policy to
                each task or program, while working closely with our client to
                achieve their particular goal or objective. The following IPoint
                Advisors services can be provided separately or in any
                combination as a broad-based program:
              </p>
            </div>

            <ul>
              {services
                .filter((service) => service.category === 'public')
                .map((service, i) => (
                  <li key={i}>
                    <p>
                      <span>{service.name}: </span> {service.description}
                    </p>
                  </li>
                ))}
            </ul>
          </ServiceStyles>
        </section>
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetchEntries({ content_type: 'service' });
  const services = await res.map((el) => el.fields);

  return {
    props: {
      services,
    },
  };
}

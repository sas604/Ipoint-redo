import Layout from '../components/layout';
import fetchEntries from '../utils/contentful';

export default function Services({ services }) {
  return (
    <Layout title="services">
      <main>
        <section>
          <h1>Services</h1>
          <section id="private">
            <h2>Private Sector</h2>
            <p>
              Working with private sector organizations to support and promote
              their endeavor in the public sector arena, IPoint Advisors
              provides the following services that are tailored to meet our
              clients' specific objectives:
            </p>
            <ul>
              {services
                .filter((service) => service.category === 'private')
                .map((service, i) => (
                  <li key={i}>
                    <p>
                      <span>{service.name}</span> {service.description}
                    </p>
                  </li>
                ))}
            </ul>
          </section>
          <section id="public">
            <h2>Public Sector</h2>
          </section>
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

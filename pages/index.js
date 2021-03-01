import Head from 'next/head';
import styled from 'styled-components';

const H1Styles = styled.h1`
  color: red;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Ipoint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Ipoint Idvisors</h1>
        <p>
          IPoint Advisors is a comprehensive advocacy, outreach and technology
          management firm serving both public agencies and private sector
          entities poised to transact business with these agencies. First and
          foremost we are proactive partners with our advocacy clients. Our
          seasoned professional staff is well-versed in public affairs and is
          comprised of individuals that currently hold or have held positions as
          Mayor, Council Member, Commissioner and City Manager. These same
          individuals collectively offer our clients expertise in marketing,
          development and technology.
        </p>
      </main>
    </>
  );
}

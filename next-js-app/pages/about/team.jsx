import Image from 'next/image';
import Link from 'next/link';
import Page from '../../components/Page';

const AboutTeam = () => (
    <Page title="L'équipe">
        <h1>La super équipe</h1>
        <Image
            src="/images/team01.jpg"
            alt="The Team"
            width={800}
            height={415}
        />
        <p>
            <Link href="/about">Retour</Link>
        </p>
    </Page>
);

export default AboutTeam;

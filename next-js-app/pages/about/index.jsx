import Link from 'next/link';
import Page from '../../components/Page';

const About = () => (
    <Page title="À propos">
        <h1>À propos du SSR et du SSG, et de Next.js</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, unde
            repellendus facere sequi enim maxime qui ipsum eligendi quaerat culpa, ipsa
            voluptatibus consectetur adipisicing elit. Asperiores, unde
            repellendus ipsa voluptatibus debitis eaque id, molestias vel, quisquam quas
            temporibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, unde
            repellendus ipsa voluptatibus debitis eaque id, molestias vel, quisquam quas
            temporibus facere sequi enim maxime qui ipsum eligendi quaerat culpa, unde
            repellendus ipsa voluptatibus debitis eaque id, molestias vel, quisquam quas
            temporibus facere sequi enim maxime qui ipsum eligendi quaerat culpa.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia similique in
            delectus. Sunt nulla aliquam deleniti aspernatur soluta id ex rerum, nihil sed
            impedit debitis possimus optio corrupti delectus.
        </p>
        <h3>
            <Link href="/about/team">Découvrir l'équipe</Link>
        </h3>
    </Page>
);

export default About;

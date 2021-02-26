import './index.scss';
import { User } from 'types/models.d';

type Props = {
    user: User | null,
}

const Hello = (props: Props) => {
    const { user } = props;
    return (
        <h2 className="Hello">
            Hello {user ? user.name : 'World'}!
        </h2>
    );
};

export default Hello;

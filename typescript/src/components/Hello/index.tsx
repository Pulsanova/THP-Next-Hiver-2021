import './index.scss';
import { User } from 'types/models.d';

type Props = {
    user: User | null,
}

const Hello = (props: Props) => {
    const { user } = props;
    return (
        <h1 className="Hello">
            Hello {user ? user.name : 'world'}!
        </h1>
    );
};

export default Hello;

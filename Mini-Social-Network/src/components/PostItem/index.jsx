import './index.scss';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Button from 'components/Button';

const PostItem = ({ data }) => {
    const currentUserName = useSelector((state) => state.name);

    const { text, user, created_at: createdAt } = data;

    const isMyOwnPost = currentUserName === user.username;

    const humanDate = useMemo(() => {
        const date = new Date(createdAt);
        const formatStyle = { dateStyle: 'long', timeStyle: 'short' };
        return new Intl.DateTimeFormat('fr-FR', formatStyle).format(date);
    }, [createdAt]);

    return (
        <li className="PostItem">
            <div className="PostItem__header">
                <div className="PostItem__header__author">
                    Written by {isMyOwnPost ? 'myself' : user.username}
                </div>
                <div className="PostItem__header__date">
                    {humanDate}
                </div>
                {isMyOwnPost && <Button>Edit</Button>}
            </div>
            <p className="PostItem__text">
                {text}
            </p>
        </li>
    );
};

export default PostItem;

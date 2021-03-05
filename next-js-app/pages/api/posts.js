import allPosts from '../../data/posts.json';

const getPosts = (req, res) => {
    res.status(200).json(allPosts);
};

export default getPosts;

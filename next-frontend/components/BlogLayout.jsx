import PostArticleHero from './PostArticleHero';
import PostArticle from './PostArticle';
import { getThreeLatestBlogs } from '../utils/api';
import PostList from './sections/PostList';

const BlogLayout = ({ data }) => {
    return (
        <>
            <PostArticleHero
                image={data.attributes.cover_Image.data?.attributes.url}
            />

            <PostArticle
                data={{
                    //image: '',
                    title: data.attributes.title,
                    date: data.attributes.createdAt,
                    author: data.attributes.author.data,
                    link: 'http://www.google.com.au',
                }}
            >
                {data.attributes.content}
            </PostArticle>

            <PostList recommendation />
        </>
    );
};

export default BlogLayout;

import PostArticleHero from './PostArticleHero';
import PostArticle from './PostArticle';
import { getThreeLatestBlogs } from '../utils/api';
import PostList from './sections/PostList';
import { useRouter } from 'next/router';

const BlogLayout = ({ data }) => {
    const router = useRouter();
    const currentUrl = router.asPath;

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
                    content: data.attributes.content,
                    //link: 'http://www.google.com.au',
                }}
            >
                {data.attributes.content}
            </PostArticle>

            <PostList recommendation mobileSlider currentUrl={currentUrl} />
        </>
    );
};

export default BlogLayout;

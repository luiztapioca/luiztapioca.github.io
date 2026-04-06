import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = (await getCollection('posts', ({ data }) => {
        return data.draft !== true;
    })).sort(
        (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    );

    const recentPosts = posts.slice(0, 20);

    return rss({
        title: 'tapioca com café',
        description: 'Minha presença digital.',
        site: context.site,

        items: recentPosts.map((post) => {
            const categories = post.data.tags
                ? post.data.tags.map(tag => `<category>${tag}</category>`).join('')
                : '';

            return {
                title: post.data.title,
                pubDate: post.data.publishDate,
                description: post.data.description,
                link: `/blog/${post.id}/`,
                customData: categories,
            };
        }),

        customData: `<language>pt-br</language>`,
    });
}

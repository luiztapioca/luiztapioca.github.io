import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => {
      return data.draft !== true;
  })).sort(
      (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'bool.tec',
    description: 'Minha presença digital.',
    site: context.site,
    
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    
    customData: `<language>pt-br</language>`,
  });
}
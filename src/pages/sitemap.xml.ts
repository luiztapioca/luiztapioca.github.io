import { getCollection } from "astro:content";

const site = "https://rosadehiroshima.github.io";

export async function GET() {
    const posts = await getCollection("posts", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });

    const tagSet = new Set(
        posts.flatMap((post) => post.data.tags || []),
    );

    const staticPages = [
        {
            url: `${site}/`,
            lastmod: new Date().toISOString(),
        },
        {
            url: `${site}/rss.xml`,
        },
    ];

    const postPages = posts.map((post) => ({
        url: `${site}/${post.id}/`,
        lastmod: post.data.publishDate.toISOString(),
    }));

    const tagPages = [...tagSet].map((tag) => ({
        url: `${site}/tags/${tag}/`,
    }));

    const urls = [...staticPages, ...postPages, ...tagPages];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        ({ url, lastmod }) => `  <url>
    <loc>${url}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ""}
  </url>`,
    )
    .join("\n")}
</urlset>`;

    return new Response(body, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
}

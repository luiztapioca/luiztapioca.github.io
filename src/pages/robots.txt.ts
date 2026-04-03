export function GET() {
    return new Response(
        `User-agent: *
Allow: /

Sitemap: https://rosadehiroshima.github.io/sitemap.xml
`,
        {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        },
    );
}

import { fetchPosts } from '$api/posts';

export async function GET() {
	const title = `Wim's blog`;
	const link = 'https://www.wimon.dev/';
	const posts = fetchPosts();

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return {
		headers,
		body: `
        <rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
            <channel>
                <title>${title}</title>
                <link>${link}</link>
                <description>My blogposts</description>
                <managingEditor>wim.onderbeke@zoho.eu</managingEditor>
                ${(await posts)
									.map(
										(post) =>
											`
                    <item>
                        <title>${post.title}</title>
                        <description>${post.shortContent}</description>
                        <pubDate>${new Date(post.publishedAt)}</pubDate>
                        <author>wim.onderbeke@zoho.eu</author>
                    </item>
                    `
									)
									.join('')}
            </channel>
        </rss>
        `
	};
}

// <content:encoded>
// ${post.content}
// <div style="margin-top: 50px; font-style: italic;">
// <strong>
// <a href="${link}blog/${post.slug}">
// Keep reading
// </a>
// </strong>
// </div>
// </content:encoded>

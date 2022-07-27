import { fetchPosts } from '$api/posts';
import type { RequestHandler } from './__types';
import type { PreviewPost } from '$api/posts';

interface BlogProps {
	posts: PreviewPost[];
}

export const GET: RequestHandler<BlogProps> = async () => {
	const posts = await fetchPosts();
	return {
		body: {
			posts
		},
		status: 200
	};
};

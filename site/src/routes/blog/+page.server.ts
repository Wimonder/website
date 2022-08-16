import { fetchPosts } from '$api/posts';
import type { PageServerLoad } from './$types';
import type { PreviewPost } from '$api/posts';

interface BlogProps {
	posts: PreviewPost[];
}

export const load: PageServerLoad<BlogProps> = async () => {
	const posts = await fetchPosts();
	return {
		posts
	};
};

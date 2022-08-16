import type { BlogPost } from '$api/post-by-slug';
import { fetchPostBySlug } from '$api/post-by-slug';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad<{ post: BlogPost }> = async ({ params }) => {
	const data = await fetchPostBySlug(params.slug);
	if (data) {
		return {
			post: data
		};
	}
};

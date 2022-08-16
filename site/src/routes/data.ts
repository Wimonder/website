import type { PreviewPost } from '$api/posts';
import { fetchPosts } from '$api/posts';
import { fetchWhoamiData } from '$api/whoami';
import type { RequestHandler } from './__types';

export interface LayoutData {
	resumeUrl: string;
	posts: PreviewPost[];
}

export const GET: RequestHandler<LayoutData> = async () => {
	const whoamiData = await fetchWhoamiData();
	const posts = await fetchPosts();
	return {
		body: {
			...whoamiData.whoami,
			posts
		},
		status: 200
	};
};

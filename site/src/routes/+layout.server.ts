import type { PreviewPost } from '$api/posts';
import { fetchPosts } from '$api/posts';
import { fetchWhoamiData } from '$api/whoami';
import type { PageServerLoad } from './$types';

interface LayoutProps {
	resumeUrl: string;
	posts: PreviewPost[];
}

export const load: PageServerLoad<LayoutProps> = async () => {
	const whoamiData = await fetchWhoamiData();
	const posts = await fetchPosts();
	return {
		...whoamiData.whoami,
		posts
	};
};

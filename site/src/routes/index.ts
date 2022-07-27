import type { Education } from '$api/education';
import { fetchEducation } from '$api/education';
import type { Experience } from '$api/experiences';
import { fetchExperiences } from '$api/experiences';
import type { PreviewPost } from '$api/posts';
import { fetchPosts } from '$api/posts';
import { fetchWhoamiData } from '$api/whoami';
import type { InputValue } from '@portabletext/svelte/ptTypes';
import type { RequestHandler } from './__types';

interface IndexProps {
	name: string;
	email: string;
	short: InputValue;
	about: InputValue;
	experiences: Experience[];
	education: Education[];
	posts: PreviewPost[];
}

export const GET: RequestHandler<IndexProps> = async () => {
	const [whoamiData, experiences, education, posts] = await Promise.all([
		fetchWhoamiData(),
		fetchExperiences(),
		fetchEducation(),
		fetchPosts()
	]);
	return {
		body: {
			...whoamiData.whoami,
			experiences,
			education,
			posts
		},
		status: 200
	};
};

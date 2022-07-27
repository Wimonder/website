import { sanityClient } from '$lib/sanity';
import groq from 'groq';

export interface PreviewPost {
	publishedAt: string;
	_createdAt: string;
	_updatedAt: string;
	title: string;
	slug: string;
	estimatedReadingTime: number;
	shortContent: string;
}

const PostsQuery = groq`
		*[_type == "blogpost" && !(_id in path("drafts.**"))] {
			publishedAt,
            _createdAt,
			_updatedAt,
			title,
			"slug": slug.current,
            "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 ),
            shortContent
		}`;

export const fetchPosts = async () => sanityClient.fetch<PreviewPost[]>(PostsQuery);

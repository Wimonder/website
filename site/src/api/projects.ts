import { sanityClient } from '$lib/sanity';
import type { InputValue } from '@portabletext/svelte/ptTypes';
import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import groq from 'groq';

export interface Project {
	_createdAt: string;
	_updatedAt: string;
	title: string;
	slug: string;
	content: InputValue;
	link: string;
	github: string;
	mainImage: SanityImageObject;
}

const PostsQuery = groq`
		*[_type == "project" && !(_id in path("drafts.**"))] {
            _createdAt,
			_updatedAt,
			title,
			"slug": slug.current,
			content,
            link,
            github,
            shortContent,
            mainImage,
		}`;

export const fetchProjects = async () => sanityClient.fetch<Project[]>(PostsQuery);

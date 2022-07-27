import { sanityClient } from '$lib/sanity';
import groq from 'groq';

export interface Experience {
	title: string;
	type: string;
	start: string;
	end: string | null;
	description: string | null;
	role: string;
	currentPosition: boolean;
}

export const allExperienceQuery = groq`
		*[_type == "experience" && !(_id in path("drafts.**")) && !hidden] {
            title,
			type,
            start,
			end,
			role,
            description,
			currentPosition
		}`;

export const fetchExperiences = async () => sanityClient.fetch<Experience[]>(allExperienceQuery);

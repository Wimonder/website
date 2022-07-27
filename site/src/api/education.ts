import { sanityClient } from '$lib/sanity';
import groq from 'groq';

export interface Education {
	title: string;
	place: string;
	start: string;
	end: string | null;
	currentPosition: boolean;
}

export const allEducationQuery = groq`
		*[_type == "education" && !(_id in path("drafts.**")) && !hidden] {
            title,
			place,
            start,
			end,
            currentPosition
		}`;

export const fetchEducation = async () => sanityClient.fetch<Education[]>(allEducationQuery);

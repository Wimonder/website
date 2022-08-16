import type { Project } from '$api/projects';
import { fetchProjects } from '$api/projects';
import type { PageServerLoad } from './$types';

interface ProjectsProps {
	projects: Project[];
}

export const load: PageServerLoad<ProjectsProps> = async () => {
	const projects = await fetchProjects();
	return {
		projects
	};
};

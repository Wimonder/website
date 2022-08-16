import type { Project } from '$api/projects';
import { fetchProjects } from '$api/projects';
import type { RequestHandler } from './__types';

interface ProjectsProps {
	projects: Project[];
}

export const GET: RequestHandler<ProjectsProps> = async () => {
	const projects = await fetchProjects();
	return {
		body: {
			projects
		},
		status: 200
	};
};

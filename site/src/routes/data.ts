import { fetchWhoamiData } from '$api/whoami';
import type { RequestHandler } from './__types';

export interface LayoutData {
	resumeUrl: string;
}

export const GET: RequestHandler<LayoutData> = async () => {
	const whoamiData = await fetchWhoamiData();
	return {
		body: {
			...whoamiData.whoami
		},
		status: 200
	};
};

export const routes = (resumeLink: string) => {
	return [
		{
			link: '/',
			text: 'Home'
		},
		{
			link: '/projects',
			text: 'Projects'
		},
		{
			link: '/blog',
			text: 'Blog'
		},
		{
			link: resumeLink,
			text: 'Resume'
		}
	];
};

import feather from 'feather-icons';

export const routes = (resumeLink: string) => {
	return [
		{
			link: '/',
			text: 'Home',
			icon: feather.icons.home.toSvg({
				width: '20px',
				height: '20px'
			})
		},
		{
			link: '/projects',
			text: 'Projects',
			icon: feather.icons.clipboard.toSvg({
				width: '20px',
				height: '20px'
			})
		},
		{
			link: '/blog',
			text: 'Blog',
			icon: feather.icons.bookmark.toSvg({
				width: '20px',
				height: '20px'
			})
		},
		{
			link: resumeLink,
			text: 'Resume',
			icon: feather.icons['file-text'].toSvg({
				width: '20px',
				height: '20px'
			})
		}
	];
};

export const socials = [
	{
		link: 'https://github.com/Wimonder',
		text: 'GitHub',
		icon: feather.icons.github.toSvg({
			width: '20px',
			height: '20px'
		})
	},
	{
		link: 'https://www.linkedin.com/in/wim-onderbeke-344296163/',
		text: 'LinkedIn',
		icon: feather.icons.linkedin.toSvg({
			width: '20px',
			height: '20px'
		})
	},
	{
		link: 'https://twitter.com/wimon_dev',
		text: 'Twitter',
		icon: feather.icons.twitter.toSvg({
			width: '20px',
			height: '20px'
		})
	}
];

export const projects = [
	{
		name: 'Linky',
		link: 'https://linky.wimon.dev',
		text: 'URL Shortener'
	}
];

import type { PreviewPost } from '$api/posts';

export enum Category {
	Projects = 'projects',
	Blog = 'blog',
	Navigation = 'navigation',
	Socials = 'socials'
}

export type SearchResult = PostResult | ProjectResult | NavigationResult | SocialResult;
export type PostResult = PreviewPost & { type: Category.Blog };
export type NavigationResult = {
	link: string;
	text: string;
	icon: string;
	type: Category.Navigation;
};
export type SocialResult = { link: string; text: string; icon: string; type: Category.Socials };
export type ProjectResult = { name: string; link: string; text: string; type: Category.Projects };

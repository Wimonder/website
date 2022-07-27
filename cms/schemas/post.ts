import type { Schema } from "sanity";

const PostSchema: Schema.DocumentDefinition = {
  title: "Post",
  name: "blogpost",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Alternative text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: "80",
      },
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      title: "Short description",
      name: "shortContent",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "textContent",
    },
  ],
};

export default PostSchema;

import type { Schema } from "sanity";

const ProjectSchema: Schema.DocumentDefinition = {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
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
      title: "Content",
      name: "content",
      type: "textContent",
    },
    {
      title: "Link",
      name: "link",
      type: "string",
    },
    {
      title: "GitHub",
      name: "github",
      type: "string",
    },
  ],
};

export default ProjectSchema;

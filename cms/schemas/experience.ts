import { Schema } from "sanity";

const ExperienceSchema: Schema.DocumentDefinition = {
  title: "Experience",
  name: "experience",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Work", value: "work" },
          { title: "Volunteering", value: "volunteer" },
          { title: "Academic", value: "academic" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
      initialValue: "work",
    },
    {
      title: "Start",
      name: "start",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "End",
      name: "end",
      type: "date",
      hidden: ({ value, parent }) => parent?.current_position,
      initialValue: false,
    },
    {
      title: "Current position",
      name: "currentPosition",
      type: "boolean",
    },
    {
      title: "Role",
      name: "role",
      type: "string",
      options: {
        list: [
          {
            title: "Software Engineer",
            value: "Software Engineer",
          },
          {
            title: "Software Engineer Intern",
            value: "Software Engineer Intern",
          },
          { title: "Tech Consultant", value: "Tech Consultant	" },
          { title: "Project Manager", value: "Project Manager" },
        ],
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hidden",
      name: "hidden",
      type: "boolean",
      initialValue: true,
    },
  ],
};

export default ExperienceSchema;

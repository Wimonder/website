import { Schema } from "sanity";

const EducationSchema: Schema.DocumentDefinition = {
  title: "Education",
  name: "education",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Place",
      name: "place",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      title: "Hidden",
      name: "hidden",
      type: "boolean",
      initialValue: true,
    },
  ],
};

export default EducationSchema;

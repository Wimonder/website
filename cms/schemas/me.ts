import type { Schema } from "sanity";

const WhoamiSchema: Schema.DocumentDefinition = {
  name: "whoami",
  title: "Who Am I",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "email", type: "email", title: "Email" },
    { name: "short", type: "textContent", title: "Short" },
    {
      name: "about",
      type: "textContent",
      title: "About",
    },
    {
      name: "resume",
      type: "file",
      title: "Resume",
    },
  ],
};

export default WhoamiSchema;

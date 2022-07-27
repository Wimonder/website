import EducationSchema from "./education";
import ExperienceSchema from "./experience";
import WhoamiSchema from "./me";
import PostSchema from "./post";
import ProjectSchema from "./project";
import TextContent from "./text-content";

export const schemaTypes = [
  TextContent,
  PostSchema,
  ProjectSchema,
  WhoamiSchema,
  ExperienceSchema,
  EducationSchema,
];

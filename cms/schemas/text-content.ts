const TextContentSchema = {
  name: "textContent",
  title: "Text Content",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
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
      title: "Code Block",
      name: "code-block",
      type: "code",
      options: {
        theme: "terminal",
        languageAlternatives: [
          { title: "CSS", value: "css" },
          { title: "Go", value: "golang" },
          { title: "HTML", value: "html" },
          { title: "Java", value: "java" },
          { title: "JavaScript", value: "javascript" },
          { title: "JSON", value: "json" },
          { title: "JSX", value: "jsx" },
          { title: "Markdown", value: "markdown" },
          { title: "Plain text", value: "text" },
          { title: "Python", value: "python" },
          { title: "sh", value: "sh" },
          { title: "TSX", value: "tsx" },
          { title: "TypeScript", value: "typescript" },
          { title: "YAML", value: "yaml" },
          { title: "Svelte", value: "svelte" },
        ],
      },
    },
  ],
};

export default TextContentSchema;

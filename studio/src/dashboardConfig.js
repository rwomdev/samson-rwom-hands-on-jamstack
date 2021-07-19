export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f565de8f140b51999d0d86",
                  title: "Sanity Studio",
                  name: "samson-rwom-hands-on-jamstack-studio",
                  apiId: "effe820d-e2b3-4c96-9305-1846eaeb3143",
                },
                {
                  buildHookId: "60f565de3d0afbf1351a55c7",
                  title: "Blog Website",
                  name: "samson-rwom-hands-on-jamstack",
                  apiId: "ba9ed074-7c83-4586-a7ba-1d6725034131",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rwomdev/samson-rwom-hands-on-jamstack",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://samson-rwom-hands-on-jamstack.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

export async function getAllRepoData() {
  try {
    const pinnedReposData = await fetch("https://api.github.com/graphql", {
      method: "POST",

      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
        "Content-Type" : "application/json"
      },

      body: JSON.stringify({
        query: `
          {
            user(login: "jonn-L") {
              pinnedItems(first: 6) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      url
                      description
                      homepageUrl
                    }
                  }
                }
              }
            }
          }
        `
      })
    })

    const pinnedReposResult = await pinnedReposData.json();    
    const pinnedRepos = pinnedReposResult.data.user.pinnedItems.edges;

    let pinnedReposIDs: string[] = []
    pinnedRepos.forEach((pinnedRepo: any) => {
      pinnedReposIDs.push(pinnedRepo.node.id);
    });

    const allReposData = await fetch("https://api.github.com/graphql", {
      method: "POST",

      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
        "Content-Type" : "application/json"
      },

      body: JSON.stringify({
        query: `
          {
            user(login: "jonn-L") {
              repositories(first: 100) {
                totalCount
                nodes {
                  id
                  name
                  url
                  description
                  homepageUrl
                }
              }
            }
          }
        `
      })
    })

    const allReposResult = await allReposData.json();
    let allRepos = allReposResult.data.user.repositories.nodes;

    const otherRepos = allRepos.filter((repo: any) => !(pinnedReposIDs.includes(repo.id)));

    return [pinnedRepos, otherRepos];
  } catch (error) {
    console.error(error);
    return [[], []];
  }
}
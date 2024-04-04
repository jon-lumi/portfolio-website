import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigator from "./components/Navigator";
import { getAllRepoData } from "./functions/getRepoData";

export default async function App() {
  const allReposData = await getAllRepoData();
  const pinnedRepos = allReposData[0];
  const otherRepos = allReposData[1];

  return (
    <div className="flex-1 flex flex-col">
      <Navigator>
        <Home/>
        <About/>
        <Projects pinnedRepos={pinnedRepos} otherRepos={otherRepos}/>
        <Contact/>
      </Navigator>
    </div>
  )
}
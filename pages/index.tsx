import { Lists } from "../src/components/lists";
import { Navbar } from "../src/components/navbar";
import { Sidebar } from "../src/components/sidebar";
import { Timeline } from "../src/components/timeline";
import { Wrap } from "../styles/Home/index.styles";

const Home = () => {
  return (
    <>
      <Navbar />

      <Wrap>
        <Sidebar />
        <Timeline />
        <Lists />
      </Wrap>
    </>
  );
};

export default Home;

import Fbrands1 from "../src/components/features/Fbrands1";
import Fcontent1 from "../src/components/features/Fcontent1";
import Fcontent10 from "../src/components/features/Fcontent10";
import Fcontent2 from "../src/components/features/Fcontent2";
import Fcontent2a from "../src/components/features/Fcontent2a";
import Fcontent3 from "../src/components/features/Fcontent3";
import Fcontent7 from "../src/components/features/Fcontent7";
import Fcta3 from "../src/components/features/Fcta3";
import Ffaqs2 from "../src/components/features/Ffaqs2";
import Ffeatures4 from "../src/components/features/Ffeatures4";
import Layout from "../src/layout/Layout";
   
const features = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    > 
      <Fcontent1 />
      <Fcontent3 />
      {/* <Freviews1 /> */}
      <Fcontent2a />
      <Fcontent7 />
      <Fcontent2 />
      {/* <Fbrands1 /> */}
      <Fcontent10 />
      <Ffeatures4 />
      <hr className="divider" />
      <Ffaqs2 />
      <Fcta3 />
    </Layout>
  );
};

export default features;

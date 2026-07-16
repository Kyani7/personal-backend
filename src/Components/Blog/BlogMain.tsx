
import { Head } from './Component/Head';
import { Body1 } from './Component/Body1';
import usePageTitle from '../../Hook/titleTab';

const BlogMain = () => {
  usePageTitle(" Blog & News | Study Abroad");
  return (
    <>
      
      <Head />
      <Body1 />
      
    </>
  );
};

export default BlogMain;
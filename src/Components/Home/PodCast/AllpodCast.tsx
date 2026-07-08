import { memo } from 'react';
import SectionHeading from '../Components/SectionHeadingProps';
import Card from './Components/Card';
import PodCast from './PodCast';

const AllpodCast = () => {
  return (
    <>
    <SectionHeading
     headingOne='Podcasts'
     title='Hima Aus Podcasts'
     briefDesc='Listen to expert discussions, interviews, and insights on technology, education, and career growth.'
    />
    <PodCast/>
    <Card
    src=''
    title=''
    videoId=''
    />

    </>
  );
};

export default memo(AllpodCast);
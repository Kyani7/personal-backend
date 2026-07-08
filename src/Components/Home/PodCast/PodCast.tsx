import SectionHeading from '../Components/SectionHeadingProps';
import SectionButton from '../Components/SectionButtonProps';
import austriaposs from '../../../assets/Podcast/austrailiaPoss.jpg';
import RightPodcast from "../../../assets/Podcast/RightPodcast.jpg"
import Card from './Components/Card';

const PodCast = () => {
  return (
    <>
    <section className='min-h-screen max-w-full section-heading-override pt-5'>
    <SectionHeading
    headingOne='Podcast'
    title='Featured Podcasts'
    briefDesc='Listen to our latest episodes on technology, innovation, career growth, and the future of education.'
    />
    <div className=' max-w-8xl mx-auto flex flex-row gap-10 items-center mt-20 px-25'>
      {/* Box 1 */}
         <Card
         src={austriaposs}
         title='Study in Australia, Southern Cross University, Access 2026 and More..'
         videoId='2fo9FdN8fao'
         />
      {/*box 2*/}
        <Card
           src={RightPodcast}
           title='Hima Aus Education X Hult Prize IOE, Pulchowk Campus  '
           videoId="AjKOW1ExvmQ"
           />
    </div>
    
    <div className='pt-16 pb-10'>
    <SectionButton
    ButtonContent='Explore All Podcast'
    to='/podcasts'
    />
    </div>
    </section>

    </>
  );
};

export default PodCast;
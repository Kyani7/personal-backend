import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbCircleNumber5Filled, TbCircleNumber6Filled, TbCircleNumber7Filled, TbCircleNumber8Filled} from 'react-icons/tb'
import MiniVisaCard from '../../../../Pages/VisaCard'

const Box2 = () => {
  return (
    <section className='border border-gray-200 shadow-md rounded-2xl mr-10 p-5 mt-5'>
        <MiniVisaCard
        number={<TbCircleNumber2Filled className="text-4xl text-[#3187C4]" />}
        title={"Temporary Activity Visa(Subclass 408)"}
        description={"This visa permits you to travel to Australia for a limited time to perform particular sorts of employment."}
        features={[
            "have the necessary abilities to carry out the activity in Australia.",
            "be supported or sponsored",
            "Be invited (if your sponsor is a Commonwealth Government agency)",
        ]}
        />

        {/* Subtype 1 */}
        <MiniVisaCard
        number={<TbCircleNumber1Filled className="text-4xl text-[#79AED8]" />}
        title={"Australian Government Endorsed Events"}
        description={"This short-term visa allows you to visit Australia to take part in events sanctioned by the Australian government."}
        features={[
            "It is only valid for participation in particular events that have been approved by the Australian government.",
            "You can stay in Australia for up to four years or the length of the event.",
        ]}
        />

        {/* Subtype 2 */}
        <MiniVisaCard
        number={<TbCircleNumber2Filled className="text-4xl text-[#79AED8]" />}
        title={"Special Program"}
        description={"This visa allows you to stay in Australia for the duration of a unique program that has been authorized. Youth exchange, cultural enrichment or community initiatives, school language assistance, or “gap year school volunteering” are all types of special programs."}
        features={[
            "It is only valid for participation in particular events that have been approved by the Australian government.",
            "You can stay in Australia for up to four years or the length of the event.",
        ]}
        />

        {/* Subtype 3 */}
        <MiniVisaCard
        number={<TbCircleNumber3Filled className='text-4xl text-[#79AED8]'/>}
        title={"Religious Work"}
        description={"You can work full-time for a religious institution in Australia with this visa. You and your family members who apply for a visa with you are allowed to stay for up to two years."}
        features={[
            "Work as a full-time religious servant at an Australian religious institution.",
            "Stay in Australia for up to two years with family members.",
            "Apply for the visa in Australia or elsewhere, but not in immigration clearance.",
        ]}
        />

        {/* Subtype 4 */}
        <MiniVisaCard
        number={<TbCircleNumber4Filled className='text-4xl text-[#79AED8]'/>}
        title={"Research Activities"}
        description={"This visa allows you to watch or participate in a research study at an Australian research or university institution. You and your family members who apply with you for a visa can stay for up to two years."}
        features={[
            "Participate in or observe an Australian research study.",
            "Stay in Australia for up to two years with family members.",
            "Apply for a visa in Australia or abroad, but not in immigration clearance.",
        ]}
        />

        {/* Subtype 5 */}
        <MiniVisaCard
        number={<TbCircleNumber5Filled className='text-4xl text-[#79AED8]'/>}
        title={"Invited for other social and cultural activity (Invited Participant):"}
        description={"If you are asked to participate in a community-based event, such as a sporting event, this visa allows you to visit Australia. You and your family members traveling on the visa can remain for up to three months."}
        features={[
            "You must have been invited to participate in an Australian community event.",
            "You can stay in Australia with members of your family for up to three months.",
            "You can apply for a visa in Australia or abroad, but not in immigration clearance.",
        ]}
        />

        {/* Subtype 6 */}
        <MiniVisaCard
        number={<TbCircleNumber6Filled className='text-4xl text-[#79AED8]'/>}
        title={"Sporting Activities"}
        description={"This visa permits you to play, coach, instruct, or adjudicate for an Australian team, as well as participate in high-level sports training with a sporting organization. You and your family are allowed to stay in Australia for a maximum of two years."}
        features={[
            "Play for an Australian team, coach, instruct, adjudicate, or undertake high-level sports training with a sporting organization.",
            "Stay with family members for up to two years.",
            "Apply for the visa in Australia or elsewhere, but not in immigration clearance",
        ]}
        />

        {/* Subtype 7 */}
        <MiniVisaCard
        number={<TbCircleNumber7Filled className='text-4xl text-[#79AED8]'/>}
        title={"Entertainment Activities"}
        description={"This temporary visa allows you to work in the entertainment business in Australia as a performer, production, or support crew on film, television, or live projects. Your visa application can include family members."}
        features={[
            "Work in the entertainment sector on films, television shows, or live performances.",
            "Stay in Australia for up to two years with family members.",
            "Apply for the visa in Australia or elsewhere, but not in immigration clearance.",
        ]}
        />

        {/* Subtype 8 */}
        <MiniVisaCard
        number={<TbCircleNumber8Filled className='text-4xl text-[#79AED8]'/>}
        title={"SUperychat Crew"}
        description={"This visa allows you to work as a superyacht crew member in Australia. You can remain for up to a year here."}
        features={[
            "Join the crew of a superyacht in Australia.",
            "You can stay in Australia for up to a year.",
            "Apply for the visa in Australia or elsewhere, but not in immigration clearance.",
        ]}
        />
    </section>
  )
}

export default Box2;
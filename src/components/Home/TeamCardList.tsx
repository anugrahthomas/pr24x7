import TeamCard from "./TeamCard";




const team = [
    {
        name: "Neha Gour",
        role: "CEO",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Ujjain Singh",
        role: "COO-Media Monitoring",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Parineeta Nagarkar",
        role: "COO-Client Relationship & Marketing",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Vikas Rajora",
        role: "COO-Public Affairs",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Meena Anurag Bisen",
        role: "CFO",
        image: "https://images.unsplash.com/photo-1598550874175-4d71156852fd?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Sansriti Dwivedi",
        role: "COO-Strategic Communication",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Deepak Chadha",
        role: "President, PR & Public Affairs (UP)",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Pawan Tripathi",
        role: "Consultant Digital Marketing",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
];

const TeamCardList = () => {
    return <div className="pt-20 p-10 grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center">
        {team.map((member, index) => (
            <TeamCard key={index} member={member} />
        ))}

    </div>
}

export default TeamCardList;
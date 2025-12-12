import TeamCard from "./TeamCard";






const TeamCardList = () => {
    return <div className="pt-20 p-10 grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
    </div>
}

export default TeamCardList;
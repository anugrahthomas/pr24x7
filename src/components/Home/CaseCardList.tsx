import CaseCard from "../../components/Home/CaseCard";

const CaseCardList = () => {
  return (
    <div className="pt-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <CaseCard key={i} src={`https://picsum.photos/500/50${i}`} />
      ))}
    </div>
  );
};

export default CaseCardList;

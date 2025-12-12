type Item = {
  item: { title: string; description: string; image: string},
};

const CoreCard = ({ item }: Item) => {
  return (
    <div className={`p-6 md:p-4 flex items-center text-black hover:shadow-xl hover:border hover:border-gray-300 md:h-64 gap-4 cursor-pointer rounded-lg transition-all duration-100`}>
      <div>
        <img className="md:h-32" src={item.image} alt="" />
      </div>
      <div>
        <h2 className="text-[#051052] text-lg md:text-xl uppercase font-bold">
          {item.title}
        </h2>
        <p className="pt-2 text-md tracking-tight text-gray-500">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default CoreCard;

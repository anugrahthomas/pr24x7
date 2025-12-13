const logos = [1, 2, 3, 4, 5, 6, 7];

const Client = () => {
  return (
    <div className="mx-auto px-4 md:px-10">
      <div className="marquee relative flex overflow-hidden gap-4 border-y border-gray-400 cursor-pointer">
        <ul className="marquee-track flex min-w-full shrink-0 gap-1 justify-around">
          {logos.map((el, i) => (
            <li key={i} className="marquee-item">
              <img className="rounded-xl" src={`https://picsum.photos/500/50${el}`} />
            </li>
          ))}
        </ul>

        <ul className="marquee-track flex min-w-full shrink-0 gap-1 justify-around">
          {logos.map((el, i) => (
            <li key={i} className="marquee-item">
              <img className="rounded-xl" src={`https://picsum.photos/500/50${el}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Client;

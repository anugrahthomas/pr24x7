import Usp from "./Usp";
import { useState } from "react";
import available from "../../assets/available.jpeg";
import language from "../../assets/language.jpeg";
import network from "../../assets/network.jpeg";
import expert from "../../assets/expert.jpeg";
import news from "../../assets/news.jpeg";
import culture from "../../assets/culture.jpeg";
import quality from "../../assets/quality.jpeg";

const data = [
  {
    id: 1,
    title: "24x7 Availability",
    list: [
      "We're available 24 x 7 because we know clients might need us anytime.",
      "Knowing that public relations is not a 9-5 job, it is crucial to take a proactive approach to build your brand. For this, we make ourselves available at all times.",
    ],
    image: available,
  },
  {
    id: 2,
    title: "Understanding of  regional media",
    list: [
      "We understand regional media better than anyone else, thanks to our team in more than 68 Cities.",
    ],
    image: language,
  },
  {
    id: 3,
    title: "Network & Media Relations",
    list: [
      "Strong networks among tier-02 and tier-03 cities.",
      "Our team across the network has been acknowledged for its media relations capability.",
    ],
    image: network,
  },
  {
    id: 4,
    title: "Expert in Regional Crisis Communication",
    list: [
      "Dedicated team is available 24x7",
      "Sound understanding of risks to reputation",
      "Experience of post-crisis rehabilitation",
      "Experience in managing crises related to metal, mining, cement & other consumer-facing industries and transactions.",
    ],
    image: expert,
  },
  {
    id: 5,
    title: "Country's Best Media Monitoring Capabilities",
    list: [
      "India's largest Media Monitoring Network.",
      "We operate 24x7 and 365 days a year",
      "Covering 450+ publications",
      "Team of 30+ dedicated, knowledgeable experts exclusively in Media Monitoring.",
    ],
    image: news,
  },
  {
    id: 6,
    title: "Culture and Stability of Consulting Team",
    list: [
      "We're available 24 x 7 because we know clients might need us anytime.",
      "Knowing that public relations is not a 9-5 job, it is crucial to take a proactive approach to build your brand. For this, we make ourselves available at all times. ",
    ],
    image: culture,
  },
  {
    id: 7,
    title: " Delivering Quality with Lasting Client Relationships.",
    list: [
      "We deliver quality projects which ensure lasting relationships with our clients.",
    ],
    image: quality,
  },
];

const UspList = () => {
  const [id, setId] = useState<number>(0);
  return (
    <div className="relative place-items-center space-y-2">
      {data[id] && <Usp usp={data[id]} />}

      <div className="md:absolute -bottom-2 right-48 space-x-1 pt-4 md:pt-0">
        {data.map((_, i) => (
          <button key={i} className={`px-4 py-2 rounded-full cursor-pointer ${i == id ? "bg-orange-400" : "bg-white"} shadow-xl border border-gray-300 transition-all duration-200 hover:scale-105`} onClick={() => setId(i)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UspList;

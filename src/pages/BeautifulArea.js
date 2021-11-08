import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function BeautifulARea() {
  const { id } = useParams();
  const url = `https://6188bd7ed0821900178d74f8.mockapi.io/BeautifulArea/${id}`;
  const [area, setArea] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setArea(response.data);
    });
  }, [url]);

  if (area) {
    return (
      <div className="m-auto w-4/5 md:w-2/4 mt-6">
        <img
          className="rounded mb-4 w-full"
          src={area.Images}
          alt={area.name}
        />
        <h5 className=" text-red-600 text-lg mb-2">{area.price}</h5>
        <h4 className="text-2xl mb-2 font-semibold">{area.name}</h4>
        <p className=" text-justify">{area.Description}</p>
      </div>
    );
  }

  return <div></div>;
}

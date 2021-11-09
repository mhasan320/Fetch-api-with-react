import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../component/Loader";
export default function BeautifulARea() {
  const { id } = useParams();
  const url = `https://6188bd7ed0821900178d74f8.mockapi.io/BeautifulArea/${id}`;
  const [area, setArea] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setArea({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setArea({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setArea({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (area.loading) {
    return <Loader />;
  }

  if (area.error) {
    return (
      <p className="text-center">There has an error, Please try again Latter</p>
    );
  }

  if (area.data) {
    return (
      <div className="m-auto w-4/5 md:w-2/4 mt-6">
        <img
          className="rounded mb-4 w-full"
          src={area.data.Images}
          alt={area.data.name}
        />
        <h5 className=" text-red-600 text-lg mb-2">{area.data.price}</h5>
        <h4 className="text-2xl mb-2 font-semibold">{area.data.name}</h4>
        <p className=" text-justify">{area.data.Description}</p>
      </div>
    );
  }

  return <div></div>;
}

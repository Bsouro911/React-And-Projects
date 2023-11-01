import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../contexts/context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const resp = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const res = await axios.get(`${url}&query=${searchTerm}`);
      return res.data;
    },
  });
  if (resp.isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    );
  }
  if (resp.error) {
    return (
      <section className="image-container">
        <h4>there was an error</h4>
      </section>
    );
  }

  const results = resp.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results fetched</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            className="img"
            key={item.id}
          />
        );
      })}
    </section>
  );
};

export default Gallery;

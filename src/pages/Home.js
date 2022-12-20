import Layout from "../Layout/Layout";
import Fcaroules from "../reUsables/carousel";
import F1 from "../assests/f1.jpg";

const images = [
  {
    name: "Flavours-Cafe",
    image: F1,
    title: "Welcome to Flavours Tirupati",
    subtitle: "The place for deliciuos dishes",
  },
];

const Home = () => {
  return (
    <>
      <Layout title="Flavours Cafe | Welcome to delicious Foods.">
        {images.map((r, i) => (
          <Fcaroules
            key={i}
            image={r.image}
            title={r.title}
            subtitle={r.subtitle}
          />
        ))}
      </Layout>
    </>
  );
};
export default Home;

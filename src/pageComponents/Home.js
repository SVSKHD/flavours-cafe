import F1 from "../assests/f1.jpg";
import Fcaroules from "../reUsables/carousel";
import Layout from "../Layout/Layout";
import HomeHero from "../components/home/homeHero";
const HomeComponent = () =>{
    const images = [
        {
          name: "Flavours-Cafe",
          image: F1,
          title: "Welcome to Flavours Tirupati",
          subtitle: "The place for deliciuos dishes",
        },
      ];
return(
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
        <HomeHero />
      </Layout>
    </>
)
}
export default HomeComponent
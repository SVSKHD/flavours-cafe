import Layout from "../Layout/Layout";
import Fcaroules from "../reUsables/carousel";
import F1 from "../assests/f1.jpg"

const images = [
    {
        name:"Flavours-Cafe",
        image:F1,
        title:"Welcome to Flavours Tirupati"
    }
]

const Home = () => {
  
    return (
    <>
      <Layout>
        {images.map((r,i)=>(
            <Fcaroules key={i} image={r.image} title={r.title} />
        ))}
        
      </Layout>
    </>
  );
};
export default Home;

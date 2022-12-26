import TypeWriterEffect from "react-typewriter-effect";

const TextLoop = () => {
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "Poppins",
        
        fontWeight: 500,
        fontSize: "1.5em",
      }}
      startDelay={1000}
      cursorColor="#3F3D56"
      multiText={[
        "Taste the best",
        "Experience the taste ever",
      ]}
      multiTextDelay={1000}
      typeSpeed={30}
    />
  );
};
export default TextLoop;

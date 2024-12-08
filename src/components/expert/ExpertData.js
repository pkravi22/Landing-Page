import Alumni1 from "../../assets/images/alumini1.jpeg";
import Alumni2 from "../../assets/images/alumini2.jpeg";
import Alumni3 from "../../assets/images/alumini3.jpeg";
import Alumni4 from "../../assets/images/alumni4.webp";

// List of pictures
const pictures = [Alumni1, Alumni2, Alumni3, Alumni4];

// Function to randomly select an image
const getRandomImage = () => pictures[Math.floor(Math.random() * pictures.length)];

const Experts = [
  {
    picture: getRandomImage(), // Get random picture for each expert
    name: "John Doe",
    college: "Harvard University",
    position: "Software Engineer",
    company: "Google",
  },
  {
    picture: getRandomImage(),
    name: "Jane Smith",
    college: "Stanford University",
    position: "Data Scientist",
    company: "Facebook",
  },
  {
    picture: getRandomImage(),
    name: "Alice Johnson",
    college: "Massachusetts Institute of Technology",
    position: "Product Manager",
    company: "Amazon",
  },
  {
    picture: getRandomImage(),
    name: "Bob Brown",
    college: "California Institute of Technology",
    position: "UX Designer",
    company: "Microsoft",
  },
  {
    picture: getRandomImage(),
    name: "Charlie Davis",
    college: "Princeton University",
    position: "Full Stack Developer",
    company: "Netflix",
  },
  {
    picture: getRandomImage(),
    name: "Emily Wilson",
    college: "University of Cambridge",
    position: "Systems Analyst",
    company: "IBM",
  },
  {
    picture: getRandomImage(),
    name: "David Lee",
    college: "University of Oxford",
    position: "DevOps Engineer",
    company: "Spotify",
  },
  {
    picture: getRandomImage(),
    name: "Sarah Miller",
    college: "Yale University",
    position: "Data Engineer",
    company: "Uber",
  },
];

export default Experts;

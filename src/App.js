import Header from "./components/Header";
import ScorllNav from "./components/ScorllNav";


function App() {
  const personalDetails = {
    name: "Gaurav Sharma",
    location: "Mumbai, India",
    email: "gaurav200274.com",

  };

  return (
    <>
      
      <ScorllNav personalDetails={personalDetails} />
      
    </>
  );
}

export default App;

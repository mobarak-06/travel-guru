import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

const Home = () => {
    return (
        <div>
     <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/NT5fMTz/shifaaz-shamoon-qtb-V-8-P-Ksk-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60">
        <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
        <Header></Header>
        </div>
        </div>
      </div>
        </div>
    );
};

export default Home;
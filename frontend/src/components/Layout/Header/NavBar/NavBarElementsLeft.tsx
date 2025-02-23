import { Link } from "react-router-dom";

import { logoLime500 } from "../../../../utils/logos";
import { useHomePageContext } from "../../../../noamExtentions/HomePageContext";


type NavBarElementsLeftProps = {
  resetHomePageState: () => void; // Define the prop type
};

function NavBarElementsLeft() {
  const { setShowHomeGallery } = useHomePageContext();
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <span className="sr-only">Your Company</span>
      <Link to="/" onClick={() => setShowHomeGallery(null)}>
        <img
          className="h-12 w-auto sm:h-10"
          src={logoLime500}
          alt=""
        />
      </Link>
    </div>
  );
}

export default NavBarElementsLeft;


import MainNavigation from '../MainNavigation';
import { Outlet} from "react-router-dom";

const Root = () => {
    return (
        <>
          <MainNavigation />
          <Outlet/>
        </>
      );
}

export default Root;

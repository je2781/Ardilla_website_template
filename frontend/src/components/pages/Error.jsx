import PageContent from "../PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../MainNavigation";

function Error() {
  const error = useRouteError();

  let title = "An error ocurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find page or resource.";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Error;

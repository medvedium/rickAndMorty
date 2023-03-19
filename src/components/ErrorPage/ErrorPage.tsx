import { useRouteError } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <AppHeader />
      <div className={styles.error}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}

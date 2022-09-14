import Head from "next/head";
import Navigation from "../Navigation/Navigation";


function Container(props) {

  return (
    <div>
      <Head>
        <title>Next CRUD</title>
        <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" />
      </Head>
      
      <Navigation />
      <div className="container ">
        {props.children}
      </div>
    </div>

  );
}

export default Container;
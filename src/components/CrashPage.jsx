import errorImage from "../assets/snorlax.gif";
function CrashPage({ setError }) {
  return (
    <div className="h-screen flex flex-col flex-wrap sm:flex-nowrap justify-center items-center mx-5 p-5">
      <div className="m-5">
        <strong className="text-3xl ">Something's gone wrong</strong>
        <p className="mt-5">
          Try refreshing the page. Check your internet connection. If you still
          see this message our service might be disrupted. Sorry for any
          inconvenience, and we look forward to having you back soon.
        </p>
        <p>
          <strong>A wild Snorlax blocks your path.</strong>
        </p>
      </div>
      <img
        src={errorImage}
        alt=""
        className="object-contain w-72 sm:w-96 mx-auto "
      />
    </div>
  );
}

export default CrashPage;

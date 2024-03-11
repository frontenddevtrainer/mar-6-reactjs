interface props {
  show?: null | string
}

const ErrorpageScreen = ({ show = null }: props) => {
  if (show) {
    return <div>{show}</div>;
  }

  return <div>No page found!!!</div>;
};

export default ErrorpageScreen;

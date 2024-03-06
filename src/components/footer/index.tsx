const Footer = ({ counter }) => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p className="text-center">Copyright 2023, Music Store | counter is at {counter}</p>
    </footer>
  );
};

export default Footer;
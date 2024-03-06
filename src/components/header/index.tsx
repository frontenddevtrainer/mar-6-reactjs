const Header = (props) => {

  const title = props.title

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">{title}</h1>
      <div className="flex items-center">
        <a href="#" className="mr-6">
          <span className="material-icons"> shopping_cart </span>
        </a>

        <div className="relative inline-block text-left">
          <button type="button" className="inline-flex items-center">
            <span className="material-icons"> account_circle </span>
            <span className="ml-2">Profile</span>
            <span className="material-icons"> arrow_drop_down </span>
          </button>
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
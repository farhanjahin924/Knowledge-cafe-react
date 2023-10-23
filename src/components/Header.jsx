import x from "../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex text-5xl justify-between items-center p-4 mx-4 border-b-2">
      <h1 className=" font-bold">Knowledge Cafe</h1>
      <img src={x} alt="" />
    </header>
  );
};

export default Header;

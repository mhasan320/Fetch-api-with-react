import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="bg-gray-200 py-2 px-5 flex justify-between">
      <div className="text-indigo-900 text-lg">Fetch-API</div>
      <Navbar />
    </div>
  );
}

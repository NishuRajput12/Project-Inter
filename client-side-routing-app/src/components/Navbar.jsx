import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white text-black p-4 fixed top-0 left-0 right-0 w-full shadow-md z-50">
      <div className="flex justify-end space-x-6">
        
        <Link to="/" className="hover:text-blue-500 ">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}

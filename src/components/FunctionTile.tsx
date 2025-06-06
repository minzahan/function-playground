import { Link } from "react-router-dom";

interface FunctionTileProps {
  name: string;
  path: string;
}

export function FunctionTile({ name, path }: FunctionTileProps) {
  return (
    <Link
      to={path}
      className="p-8 rounded-xl shadow-md bg-green-100 hover:bg-green-200 transition"
    >
      {name}
    </Link>
  );
}

import { Link } from "react-router-dom";

interface FunctionTileProps {
  name: string;
  path: string;
}

export function FunctionTile({ name, path }: FunctionTileProps) {
  return (
    <Link
      to={path}
      className="block border p-4 rounded hover:bg-gray-100 text-center shadow"
    >
      {name}
    </Link>
  );
}

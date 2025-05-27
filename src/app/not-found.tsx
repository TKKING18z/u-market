import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16 mx-auto text-center md:py-32">
      <h1 className="text-6xl font-bold text-neutral-900">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Página no encontrada</h2>
      <p className="mt-4 text-neutral-600">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Button asChild className="mt-8 bg-blue-600 hover:bg-blue-700">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
} 
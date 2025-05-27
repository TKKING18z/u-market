import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className="container px-4 py-8 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">U-MARKET</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Plataforma oficial digital universitaria para comprar y vender en la Universidad Don Bosco.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <nav className="flex flex-col mt-2 space-y-2">
              <Link href="/" className="text-sm text-neutral-600 hover:text-primary">
                Inicio
              </Link>
              <Link href="/marketplace" className="text-sm text-neutral-600 hover:text-primary">
                Marketplace
              </Link>
              <Link href="/publicar" className="text-sm text-neutral-600 hover:text-primary">
                Publicar
              </Link>
              <Link href="/contacto" className="text-sm text-neutral-600 hover:text-primary">
                Contacto
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contacto</h3>
            <address className="mt-2 not-italic text-sm text-neutral-600">
              <p>Universidad Don Bosco</p>
              <p>Soyapango, San Salvador</p>
              <p>El Salvador</p>
              <p className="mt-2">Email: info@umarket.edu.sv</p>
            </address>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-neutral-200">
          <p className="text-sm text-center text-neutral-500">
            &copy; {new Date().getFullYear()} U-MARKET. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 
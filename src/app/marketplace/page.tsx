import React from "react";
import { SAMPLE_PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function MarketplacePage() {
  return (
    <div className="container px-4 py-12 mx-auto md:px-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Marketplace</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Explora productos y servicios ofrecidos por estudiantes de la Universidad Don Bosco.
        </p>
      </header>

      {/* Filtros y Búsqueda */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full p-2 border border-neutral-300 rounded-md"
            disabled
          />
        </div>
        <select 
          className="p-2 border border-neutral-300 rounded-md"
          disabled
        >
          <option value="">Todas las categorías</option>
          <option value="libros">Libros</option>
          <option value="electronicos">Electrónicos</option>
          <option value="accesorios">Accesorios</option>
          <option value="otros">Otros</option>
        </select>
      </div>

      {/* Listado de productos */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 
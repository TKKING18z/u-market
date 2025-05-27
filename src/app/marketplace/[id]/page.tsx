import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SAMPLE_PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = SAMPLE_PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container px-4 py-12 mx-auto md:px-6">
      <Link
        href="/marketplace"
        className="inline-flex items-center mb-6 text-sm font-medium transition-colors hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Volver al marketplace
      </Link>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="inline-block px-2 py-1 text-xs bg-neutral-100 rounded-full">
              {product.category}
            </span>
            <span className="text-sm text-neutral-500">
              ID: {product.id}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold">{product.title}</h1>
          <p className="mt-2 text-2xl font-bold text-blue-600">${product.price}</p>
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <h2 className="text-lg font-semibold">Descripción</h2>
            <p className="mt-2 text-neutral-600">{product.description}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Detalles del vendedor</h2>
            <p className="mt-2 text-neutral-600">
              Producto publicado por: usuario{product.userId.replace("user", "")}@udb.edu.sv
            </p>
            <p className="text-neutral-600">
              Fecha de publicación: {product.createdAt.toLocaleDateString()}
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Contactar al vendedor
            </Button>
            <Button variant="outline" className="w-full">
              Guardar producto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 
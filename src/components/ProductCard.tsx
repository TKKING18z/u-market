"use client";

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{product.title}</h3>
          <span className="font-bold text-primary">${product.price}</span>
        </div>
        <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs bg-neutral-100 rounded-full">
            {product.category}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/marketplace/${product.id}`}
          className="w-full text-center text-sm text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-md transition-colors"
        >
          Ver detalles
        </Link>
      </CardFooter>
    </Card>
  );
} 
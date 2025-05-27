import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div className="container px-4 py-12 mx-auto md:px-6">
      {/* Hero Section */}
      <section className="py-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Bienvenido a <span className="text-blue-600">U-MARKET</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              La plataforma oficial digital universitaria para comprar y vender en la Universidad Don Bosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/marketplace">Ver Productos</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/publicar">Publicar Producto</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square">
            <Image
              src="/IMAGE.jpeg"
              alt="U-MARKET App"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center">¿Qué puedes hacer en U-MARKET?</h2>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Compra</h3>
            <p className="mt-2 text-neutral-600">
              Encuentra productos y servicios ofrecidos por otros estudiantes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Vende</h3>
            <p className="mt-2 text-neutral-600">
              Publica tus productos o servicios para que otros estudiantes puedan verlos.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M17 6.1H3" />
                <path d="M21 12.1H3" />
                <path d="M15.1 18H3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Conecta</h3>
            <p className="mt-2 text-neutral-600">
              Conoce a otros estudiantes y forma parte de la comunidad universitaria.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">¿Listo para empezar?</h2>
          <p className="mt-4 text-lg">
            Únete a la comunidad de U-MARKET y comienza a comprar y vender en la Universidad Don Bosco.
          </p>
          <Button asChild className="mt-8 bg-white text-blue-600 hover:bg-neutral-100">
            <Link href="/marketplace">Explorar Marketplace</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 
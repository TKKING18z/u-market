"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProductForm } from "@/types";

export default function PublicarPage() {
  const [formData, setFormData] = useState<ProductForm>({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica para enviar los datos a Firestore
      // Simulamos un delay para mostrar el estado de "enviando"
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Producto enviado:", formData);
      setIsSuccess(true);
      setFormData({
        title: "",
        description: "",
        price: "",
        imageUrl: "",
        category: "",
      });

      // Reseteamos el estado de éxito después de 3 segundos
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error al publicar el producto:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 py-12 mx-auto md:px-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Publicar Producto</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Comparte tus productos o servicios con otros estudiantes de la Universidad Don Bosco.
        </p>
      </header>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          {isSuccess ? (
            <div className="p-4 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto text-green-500"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h2 className="mt-4 text-xl font-semibold">¡Producto publicado con éxito!</h2>
              <p className="mt-2 text-neutral-600">
                Tu producto ha sido publicado y ya está disponible en el marketplace.
              </p>
              <Button 
                className="mt-4 bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsSuccess(false)}
              >
                Publicar otro producto
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium">
                  Título del producto
                </label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Ej. Calculadora científica"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium">
                  Categoría
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full p-2 border border-neutral-300 rounded-md"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="Libros">Libros</option>
                  <option value="Electrónicos">Electrónicos</option>
                  <option value="Accesorios">Accesorios</option>
                  <option value="Instrumentos">Instrumentos</option>
                  <option value="Arte">Arte</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div>
                <label htmlFor="price" className="block mb-2 text-sm font-medium">
                  Precio ($)
                </label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Ej. 25.00"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium">
                  URL de la imagen
                </label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                />
                <p className="mt-1 text-xs text-neutral-500">
                  Ingresa la URL de una imagen de tu producto. Puedes usar servicios como Imgur o ImgBB.
                </p>
              </div>

              <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium">
                  Descripción
                </label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe tu producto, su estado, características, etc."
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Publicando..." : "Publicar Producto"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 
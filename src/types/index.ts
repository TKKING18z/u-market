// Tipo para los productos en el marketplace
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  userId: string;
  createdAt: Date;
}

// Tipo para el formulario de contacto
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Tipo para el formulario de nuevo producto
export interface ProductForm {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
} 
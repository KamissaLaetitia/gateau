import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ProductsProvider } from '@/context/ProductsContext';

export const metadata: Metadata = {
  title: 'Pâtisserie Royale | Vente & Création de Gâteaux d\'Exception',
  description: 'Commandez vos gâteaux d\'anniversaire, pièces montées de mariage, cupcakes et créations personnalisées faites main. Livraison réfrigérée 24h/48h.',
  keywords: 'gâteaux, pâtisserie, vente gâteaux en ligne, commande gâteau anniversaire, pièce montée mariage, cupcakes, number cake, gâteaux sur-mesure',
  openGraph: {
    title: 'Pâtisserie Royale | Vente & Publicité de Gâteaux de Prestige',
    description: 'Des gâteaux qui rendent chaque moment inoubliable. Commandez votre gâteau en quelques clics.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="bg-caffeine-dark text-caffeine-cream min-h-screen flex flex-col antialiased selection:bg-caffeine-gold selection:text-caffeine-dark">
        <ProductsProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </ProductsProvider>
      </body>
    </html>
  );
}

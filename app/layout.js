// app/layout.js
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';


export const metadata = {
  title: "منظومة المتابعة",
  description: "ديوان عام محافـــظة الإسكندريـــة", 
};

export default function RootLayout({ children }) {
  return (
      <body>
        <Navbar/>
        {children}
        <Footer />
        </body>
  );
}

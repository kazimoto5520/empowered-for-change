import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavIcons from "@/components/NavIcons";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Empowered For Change",
  description: "Generated by Empowered For Change",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col">
          <NavIcons />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

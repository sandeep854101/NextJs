import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar";
export const metadata = {
  title: "Sandeep Kumar"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

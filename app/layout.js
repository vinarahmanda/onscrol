// JANGAN ada useEffect di sini
import "../styles/globals.css";
import "aos/dist/aos.css";

export const metadata = {
  title: "Vina Portfolio",
  description: "Portfolio website of Vina Rahmanda Indriyani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import Headers from "../components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Headers />

        {children}
      </body>
    </html>
  );
}

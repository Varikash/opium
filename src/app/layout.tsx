import { inter, myCustomFont, greatVibes} from "@/fonts/fonts";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.variable} ${myCustomFont.variable} ${greatVibes.variable}`}>
            {children}
        </body>
    </html>
  );
}

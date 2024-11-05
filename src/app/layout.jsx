import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const font = Poppins({
  display: "swap",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Salil Lakra",
  description: "Salil Lakra's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        ></ThemeProvider>
        {children}
      </body>
    </html>
  );
}

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
  title: "Salil Lakra - Portfolio",
  description:
    "Explore the personal portfolio of Salil Lakra, a Full Stack Developer specializing in modern web frameworks, UI/UX design, and scalable applications. Check out his projects, skills, and more.",
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

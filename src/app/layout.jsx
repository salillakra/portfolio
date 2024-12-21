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
    "Explore the personal portfolio of Salil Lakra, a Full Stack Developer specializing in modern web frameworks, and scalable applications. Check out his projects, skills, and more.",
  keywords: "Salil Lakra, Full Stack Developer, web development, portfolio, projects, skills",
  author: "Salil Lakra",
  openGraph: {
    title: "Salil Lakra - Portfolio",
    description:
      "Explore the personal portfolio of Salil Lakra, a Full Stack Developer specializing in modern web frameworks, and scalable applications. Check out his projects, skills, and more.",
    url: "https://salillakra.vercel.app",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/jyrjk1m/porfolio.png",
        width: 800,
        height: 600,
        alt: "Salil Lakra - Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Salil Lakra - Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Salil Lakra's portfolio showcasing projects, blogs, and more. Full Stack Developer, Tech Enthusiast, Explorer, and Blogger." />
        <meta name="twitter:image" content="/profile.jpeg" />
        <link rel="canonical" href={metadata.openGraph.url} />
        <meta name="robots" content="index, follow" />
      </head>
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

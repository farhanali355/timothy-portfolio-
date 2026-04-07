import type { Metadata } from "next";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "Timothy T. | Full Stack Developer",
  description: "Portfolio of Timothy T., a passionate Full Stack Developer specializing in premium web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <ToastContainer 
          position="top-center" 
          autoClose={3000} 
          theme="light" 
          transition={Slide} 
          hideProgressBar={true}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/theme-provider";
import Header from "./__component/Header";
import Footer from "./__component/Footer";
import { Provider } from "react-redux";
import StoreProvider from "@/store/StoreProvider";
//
export const metadata: Metadata = {
  title: "Next API",
  description: "Generated by Prashant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col  h-screen bg-red-200 justify-between">
              <div className="bg-slate-300 dark:bg-gray-800 fixed top-0 z-20 w-full">
                <Header />
              </div>
              <div className="bg-slate-100 dark:bg-gray-700 flex-grow p-4 mt-16 ">
                {children}
              </div>
              <div className="bg-slate-200 dark:bg-gray-800">
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

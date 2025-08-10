export const metadata = {
  title: "Blog",
  description: "App used to create blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

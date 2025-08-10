import Provider from "./provider";

export const metadata = {
  title: "Blog",
  description: "App used to create blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

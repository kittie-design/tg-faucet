import "./globals.css";

export const metadata = {
  title: "TG Faucet",
  description: "Telegram Faucet Mini App"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export const metadata = { title: "Mektubun Var – Cezaevine Mektup", description: "Duvarların ötesine, kalpten bir mektup." };
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f4f3ee", color: "#1d2b4f" }}>{children}</body>
    </html>
  );
}

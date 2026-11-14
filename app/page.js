import { db } from "../lib/supabase";
export const dynamic = "force-dynamic";

export default async function Home() {
  let ok = false, msg = "";
  try {
    const { data, error } = await db().from("settings").select("key").limit(1);
    ok = !error && !!data;
    msg = error ? error.message : "";
  } catch (e) { msg = String(e.message || e); }
  return (
    <main style={{ maxWidth: 640, margin: "60px auto", padding: "0 18px" }}>
      <h1 style={{ fontSize: 36 }}>Mektubun Var</h1>
      <p style={{ fontSize: 20 }}>Duvarların ötesine, kalpten bir mektup.</p>
      <p>Site kuruluyor. Veritabanı bağlantısı: <b>{ok ? "çalışıyor ✅" : "henüz bağlı değil ❌"}</b></p>
      {!ok && <p style={{ fontSize: 13, opacity: 0.7 }}>{msg}</p>}
    </main>
  );
}

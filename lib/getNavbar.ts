export async function getNavbar() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/navbar`, {
      cache: "no-store", // ensures fresh data
    });
  
    if (!res.ok) throw new Error("Failed to fetch Navbar global");
  
    const data = await res.json();
    return data;
  }
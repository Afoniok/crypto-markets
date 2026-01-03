export async function getGoodCompany() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/good-company?depth=2`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      console.error("Failed to fetch GoodCompany:", res.status, await res.text());
      throw new Error("Failed to fetch GoodCompany");
    }
  
    const data = await res.json();
  
    if (!data.docs || data.docs.length === 0) {
      throw new Error("No GoodCompany documents found in Payload");
    }
  
    return data.docs[0];
  }
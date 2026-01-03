export async function getStats() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/stats`,
    { cache: 'no-store' } // or 'no-cache' depending on your needs
  );

  if (!res.ok) {
    throw new Error('Failed to fetch stats');
  }

  const data = await res.json();
  return data.docs;
}
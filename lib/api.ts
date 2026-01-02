export const fetchStats = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/stats`);
    const data = await res.json();
    return data.docs; // array of stats
  };
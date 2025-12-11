import type { Puppy, ParentDog } from "./puppies";

// TODO: Update this when Person C gives the real API Gateway URL
const API_URL = "https://os6zy8kl19.execute-api.us-east-2.amazonaws.com";

export async function getPuppies(): Promise<Puppy[]> {
  const res = await fetch(`${API_URL}/puppies`);
  if (!res.ok) throw new Error("Failed to fetch puppies");
  return res.json();
}

export async function getPuppy(id: string): Promise<Puppy | null> {
  const res = await fetch(`${API_URL}/puppies/${id}`);
  if (!res.ok) return null;
  return res.json();
}


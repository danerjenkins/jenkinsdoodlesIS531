import type { Puppy, ParentDog } from "./puppies";

// TODO: Update this when Person C gives the real API Gateway URL
const API_URL = "https://YOUR_API_ID.execute-api.REGION.amazonaws.com";

export async function getPuppies(): Promise<Puppy[]> {
  const res = await fetch(`${API_URL}/puppies`);
  if (!res.ok) throw new Error("Failed to fetch puppies");
  return res.json();
}

export async function getParents(): Promise<ParentDog[]> {
  const res = await fetch(`${API_URL}/parents`);
  if (!res.ok) throw new Error("Failed to fetch parents");
  return res.json();
}

export async function getPuppy(id: string): Promise<Puppy | null> {
  const res = await fetch(`${API_URL}/puppies/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function getParent(id: string): Promise<ParentDog | null> {
  const res = await fetch(`${API_URL}/parents/${id}`);
  if (!res.ok) return null;
  return res.json();
}

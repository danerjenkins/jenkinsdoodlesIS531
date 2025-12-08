import type { Puppy, ParentDog } from "./puppies";

const API_URL = "https://YOUR_API.execute-api.us-east-2.amazonaws.com/items";

export async function fetchPuppies(): Promise<Puppy[]> {
  const res = await fetch(`${API_URL}/puppies`);
  if (!res.ok) throw new Error("Failed to load puppies");
  return res.json();
}

export async function fetchPuppyById(id: string): Promise<Puppy | null> {
  const res = await fetch(`${API_URL}/puppies/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function fetchParents(): Promise<ParentDog[]> {
  const res = await fetch(`${API_URL}/parents`);
  if (!res.ok) throw new Error("Failed to load parents");
  return res.json();
}

export async function fetchParentById(id: string): Promise<ParentDog | null> {
  const res = await fetch(`${API_URL}/parents/${id}`);
  if (!res.ok) return null;
  return res.json();
}

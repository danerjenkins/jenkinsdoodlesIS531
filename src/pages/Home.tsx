import { Link } from "react-router-dom";
import PuppyCard from "../components/PuppyCard";
import { useEffect, useState } from "react";
import { fetchPuppies, fetchParents } from "../data/api"; 
import type { Puppy, ParentDog } from "../data/puppies";

import { motion } from "framer-motion";

export default function Home() {
  const [puppies, setPuppies] = useState<Puppy[]>([]);
const [parents, setParents] = useState<ParentDog[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function load() {
    try {
      const [pups, prnts] = await Promise.all([
        fetchPuppies(),
        fetchParents()
      ]);
      setPuppies(pups);
      setParents(prnts);
    } catch {
      console.error("Error loading data");
    } finally {
      setLoading(false);
    }
  }
  load();
}, []);

  return (
    <>
      <section className="hero-section">
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/IMG_4162.jpg" alt="Family with puppies" />

          <div className="hero-overlay">
            <h2>Fall 2025 Litter</h2>
            <p>9 puppies — raised in our home</p>
          </div>
        </motion.div>
      </section>
      <div
        style={{
          marginTop: "2rem",
          padding: "1.25rem",
          background: "var(--bg-subtle)",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <Link
          to="/about"
          style={{
            color: "var(--primary)",
            fontWeight: 600,
            fontSize: "1.15rem",
            textDecoration: "none",
          }}
        >
          Thinking about adopting a puppy? Click here to learn more →
        </Link>
      </div>

      <section style={{ marginBottom: "3rem" }}>
        <h2 className="section-title">Meet the Puppies</h2>
        <div className="grid grid-3">
          {loading ? (
  <p>Loading puppies...</p>
) : (
          {puppies.map((p) => (
            <PuppyCard
              key={p.id}
              to={`/puppy/${p.id}`}
              name={p.name}
              gender = {p.gender}
              subtitle={`${p.gender} `}
              image={p.mainImage}
              status={p.status}
              variant="puppy"
            />
          ))}
          )}
        </div>

      </section>

      <section>
        <h2 className="section-title">Meet the Parents</h2>
        <div className="grid grid-3">
          {parents.map((p) => (
            <PuppyCard
              key={p.id}
              to={`/parent/${p.id}`}
              name={p.name}
              subtitle="Parent"
              image={p.mainImage}
              variant="parent"
            />
          ))}
        </div>
      </section>
    </>
  );
}

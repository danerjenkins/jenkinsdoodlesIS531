import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getPuppy } from "../data/api";
import type { Puppy } from "../data/puppies";

const FEMALE_PRICE = 1500;
const MALE_PRICE = 1500;

export default function PuppyDetail() {
  const { id } = useParams();
  const [puppy, setPuppy] = useState<Puppy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getPuppy(id!);
      setPuppy(data);
      setLoading(false);
    }
    loadData();
  }, [id]);

  if (loading) return <p>Loading puppy...</p>;
  if (!puppy) return <p>Puppy not found.</p>;

  const price =
    puppy.gender === "Female" ? FEMALE_PRICE : MALE_PRICE;

  return (
    <div className="puppy-detail">
      <Link to="/" style={{ color: "var(--primary)" }}>
        ← Back
      </Link>

      <div className="puppy-header">
        <div className="puppy-main-image">
          <motion.img
            src={puppy.mainImage}
            alt={puppy.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          />
        </div>

        <div className="puppy-info">
          <h1>{puppy.name} - {puppy.gender}</h1>

          <p className="puppy-card-price">${price.toLocaleString()}</p>

          {puppy.status && (
            <span
              className={`badge badge-${puppy.status.toLowerCase()}`}
              style={{ marginTop: "0.5rem", display: "inline-block" }}
            >
              {puppy.status}
            </span>
          )}

          <p className="puppy-description">{puppy.description}</p>
        </div>
      </div>

      <h2 className="section-title" style={{ marginTop: "2rem" }}>
        Gallery
      </h2>

      <div className="puppy-gallery-scroll">
        {puppy.gallery?.map((img) => (
          <motion.div key={img.src} whileHover={{ scale: 1.05 }}>
            <img src={img.src} alt={img.alt} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

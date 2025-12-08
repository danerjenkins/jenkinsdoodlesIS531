import { useParams, Link } from "react-router-dom";
import { puppies } from "../data/puppies";
import { motion } from "framer-motion";
// Set your prices here
const FEMALE_PRICE = 2000;
const MALE_PRICE = 1900;

export default function PuppyDetail() {
  const { id } = useParams();
  const puppy = puppies.find((p) => p.id === id);

  if (!puppy) return <p>Puppy not found.</p>;
  const price = puppy.gender === "Female" ? FEMALE_PRICE : MALE_PRICE;

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
      <h2 className="section-title" style={{ marginTop: "2rem" }}>
        Gallery
      </h2>

      <div className="puppy-gallery-scroll">
        {puppy.gallery.map((img) => (
          <motion.div
            key={img.src}
            whileHover={{ scale: 1.05 }}
            className="puppy-gallery-image"
          >
            <img src={img.src} alt={img.alt} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { useParams, Link } from "react-router-dom";
import { parents } from "../data/puppies";
import { motion } from "framer-motion";

export default function ParentDetail() {
  const { id } = useParams();
  const parent = parents.find((p) => p.id === id);

  if (!parent) return <p>Parent dog not found.</p>;

  return (
    <div className="puppy-detail">
      <Link to="/" style={{ color: "var(--primary)" }}>← Back</Link>

      <div className="puppy-header">
        <div className="puppy-main-image">
          <motion.img
            src={parent.mainImage}
            alt={parent.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          />
        </div>

        <div className="puppy-info">
          <h1>
            {parent.name} <span style={{ fontSize: "1.2rem", opacity: 0.8 }}>
              ({parent.role})
            </span>
          </h1>

          <p className="puppy-description">{parent.description}</p>

          <h3 style={{ marginTop: "1rem" }}>DNA Summary</h3>
          <p style={{ marginTop: "0.25rem" }}>{parent.dnaSummary}</p>
        </div>
      </div>

      <h2 className="section-title" style={{ marginTop: "2rem" }}>
        Gallery
      </h2>

      <div className="puppy-gallery-scroll">
        {parent.gallery.map((img) => (
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

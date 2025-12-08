import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  name: string;
  subtitle?: string;
  image: string;
  gender?: "Male" | "Female";
  status?: "Available" | "Reserved" | "Sold";
  variant?: "puppy" | "parent";
};

export default function PuppyCard({
  to,
  name,
  subtitle,
  image,
  gender,
  status,
  variant = "puppy",
}: Props) {
  //* Auto pricing only for puppies
  const FEMALE_PRICE = 1500;
  const MALE_PRICE = 1500;
  const price =
    variant === "puppy"
      ? gender === "Female"
        ? FEMALE_PRICE
        : MALE_PRICE
      : undefined;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`card ${variant === "puppy" ? "puppy-card-wrapper" : ""}`}
    >
      <Link to={to} style={{ textDecoration: "none" }}>
        {/* Puppy-only status badge */}
        {variant === "puppy" && status && (
          <span
            className={`badge badge-${status.toLowerCase()} puppy-card-status-badge`}
          >
            {status}
          </span>
        )}

        {/* Shared image */}
        <img
          src={image}
          alt={name}
          className={variant === "puppy" ? "puppy-card-image" : ""}
        />

        <div className="puppy-card-info">
          <p className="puppy-card-name">{name}</p>

          {/* Puppy-only metadata */}
          {variant === "puppy" && (
            <>
              <p className="puppy-card-meta">
                {gender} • {status ?? "Available"}
              </p>

              <p className="puppy-card-price">
                ${price!.toLocaleString()}
              </p>
            </>
          )}

          {/* Parent-only subtitle */}
          {variant === "parent" && (
            <p className="card-subtitle">{subtitle}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

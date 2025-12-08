import PuppyCard from './PuppyCard';
import { puppies, parents } from '../data/puppies';

export default function PuppyGrid() {
  return (
    <section className="mt-10 space-y-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Meet the Puppies
        </h2>
        <p className="text-xs md:text-sm text-slate-400">
          Click a puppy to see more photos and their personality.
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {puppies.map((p) => (
          <PuppyCard
            key={p.id}
            to={`/puppy/${p.id}`}
            name={p.name}
            subtitle="Available"
            image={p.mainImage}
            status={p.status}  
          />
        ))}
      </div>

      <div className="mt-8 flex items-baseline justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Meet the Parents
        </h2>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3">
        {parents.map((p) => (
          <PuppyCard
            key={p.id}
            to={`/parent/${p.id}`}
            name={p.name}
            subtitle="Parent"
            image={p.mainImage} 
          />
        ))}
      </div>
    </section>
  );
}

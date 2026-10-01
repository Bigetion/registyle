import { ArrowUpRight } from 'lucide-react';

export function DestinationCard({ image, name, location }) {
  return (
    <a className="destination-card" href="#journal">
      <img className="destination-image" src={image} alt="" loading="lazy" />
      <div className="destination-body">
        <div>
          <h3 className="destination-name">{name}</h3>
          <p className="destination-meta">{location}</p>
        </div>
        <ArrowUpRight className="destination-arrow" size={18} aria-hidden="true" />
      </div>
    </a>
  );
}
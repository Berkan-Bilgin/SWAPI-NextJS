interface CardProps {
    item: {
      name?: string;
      title?: string;
      model?: string;
      manufacturer?: string;
    };
  }
  
  export const Card: React.FC<CardProps> = ({ item }) => {
    const displayName = item.name || item.title || item.model;
  
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">{displayName}</h2>
        {item.manufacturer && <p>Manufacturer: {item.manufacturer}</p>}
      </div>
    );
  };
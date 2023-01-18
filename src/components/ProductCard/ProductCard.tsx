import { ReactNode } from "react";
import "./ProductCard.scss";

type ProductCardProps = {
  name: string;
  type: string;
  thumbnail: string;
  actions?: ReactNode;
};

function ProductCard({
  name,
  type: description,
  thumbnail,
  actions,
}: ProductCardProps) {
  return (
    <article className="ProductCard">
      <h2 className="ProductCard__title">{name}</h2>
      <p className="ProductCard__description">{description}</p>
      <img className="ProductCard__preview" src={thumbnail} alt={name} />
      {actions && <div className="ProductCard__actionsWrapper">{actions}</div>}
    </article>
  );
}

export default ProductCard;

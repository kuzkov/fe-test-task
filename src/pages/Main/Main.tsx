import Button from "../../components/Button/Button";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right.svg";
import Slider from "../../components/Slider/Slider";
import Container from "../../components/Container/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
import image from "../../assets/wine-bottle.png";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";
import { Product } from "../../models/Product";
import Checkbox from "../../components/Checkbox/Checkbox";
import "./Main.scss";
import { ChangeEvent, useState } from "react";

function Main() {
  const { data } = useFetch<Product[]>("/list.json");

  const [selectedTypes, setSelectedTypes] = useState<Product["type"][]>([]);

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedTypes((types) => {
      const name = event.target.name as Product["type"];

      if (types.includes(name)) {
        return types.filter((type) => type !== name);
      } else {
        return [...types, name];
      }
    });
  };

  const filterByType = ({ type }: Product) =>
    !selectedTypes.length || selectedTypes.includes(type);

  return (
    <div className="Main">
      <Container>
        <section className="Main__filters">
          <Checkbox
            name="dry"
            checked={selectedTypes.includes("dry")}
            onChange={handleTypeChange}
          >
            dry
          </Checkbox>
          <Checkbox
            name="semi-dry"
            checked={selectedTypes.includes("semi-dry")}
            onChange={handleTypeChange}
          >
            semi-dry
          </Checkbox>
          <Checkbox
            name="sweet"
            checked={selectedTypes.includes("sweet")}
            onChange={handleTypeChange}
          >
            sweet
          </Checkbox>
        </section>
        <Slider>
          {data?.filter(filterByType).map(({ id, name, type }) => (
            <ProductCard
              name={name}
              type={type}
              thumbnail={image}
              actions={
                <>
                  <Link to={`learn/${id}`}>
                    <Button rightIcon={<ArrowRightIcon />}>Learn</Button>
                  </Link>
                  <Link to={`shop/${id}`}>
                    <Button rightIcon={<ArrowRightIcon />}>Shop</Button>
                  </Link>
                </>
              }
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Main;

import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
// import Loading from "./Loading";

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <div className="loader"></div>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

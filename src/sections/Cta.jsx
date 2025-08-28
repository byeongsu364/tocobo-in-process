import React from "react";
import { categories } from "../util/cta";
import "../styles/sections/Cta.scss";

const Cta = () => {
  return (
    <section id="cta" className="cta">
      <div className="inner">
        <ul className="cta-list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <a href={cat.href}>
                <div className="img-wrap">
                  <img src={cat.img.src} alt={cat.img.alt} />
                </div>
                <span className="name">{cat.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cta;

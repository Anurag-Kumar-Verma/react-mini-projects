import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './style.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function MenuApp() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = allCategories;
  const [activeCategory, setActiveCat] = useState('all');

  const filterItems = (category) => {
    setActiveCat(category);
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuApp;
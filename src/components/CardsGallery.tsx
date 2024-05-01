import React from 'react';
import Card from './card';
import CardData from '@/data/cardData.json'

export default function CardsGallery() {
    return (
      <section id="giving" className="flex flex-wrap justify-evenly bg-slate-200">
        {CardData.map((card) => (
          <Card key={card.id} image={card.image} title={card.title} description={card.description} tags={card.tags} />
        ))}
      </section>
    );
  }

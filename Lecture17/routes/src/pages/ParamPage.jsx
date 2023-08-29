import React from 'react';
import { useParams } from 'react-router-dom';

const ParamPage = () => {
  const characters = [
    {
      id: '1',
      Personality:
        'Raphael is known for his tough and aggressive personality. He is often depicted as the "hot-headed" and rebellious member of the team. His character is characterized by his quick temper and a propensity for getting into fights.',
    },
  ];

  const { id } = useParams();
  const character = characters.find((char) => char.id === id);

  if (!character) {
    return <div>Character Personality not found</div>;
  }

  return (
    <div>
      <h4>{character.Personality}</h4>
    </div>
  );
};

export default ParamPage;
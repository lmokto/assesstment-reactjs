import {render} from '@testing-library/react'
import Avatar from './components/Avatar';
import PopulationList from './components/PopulationList';
import NavBar from './components/NavBar';
import React from 'react'


describe('Population and Avatar component renders the todo correctly', () => {
  it('Renders Avatar Component correctly', () => {
    const resident = {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        "Tinker",
        "Tailor",
        "Potter"
      ],
      friends: [
        "Cogwitz Chillwidget",
        "Tinadette Chillbuster"
      ]
    }

    const container = render(
      <Avatar population={resident} />
    );

    expect(container.queryByText('Pink')).toBeNull()
    expect(container.getByText('Hair Pink')).toBeDefined()

  });


});

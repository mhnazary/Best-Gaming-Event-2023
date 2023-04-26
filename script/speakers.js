const speakers = [
  {
    photo: './images/team-photo1.jpg',
    name: 'Melina Wolf',
    profession: 'Office Management',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    photo: './images/team-photo2.png',
    name: 'Martine Schumacher',
    profession: 'Project & Speaker Manager',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    photo: './images/team-photo3.jpg',
    name: 'Iryna Ivanova',
    profession: 'Sales Manager',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    photo: './images/team-photo4.jpg',
    name: 'Stephan Reichart',
    profession: 'Head of devcom',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    photo: './images/team-photo5.jpg',
    name: 'Tristan Schulze-boving',
    profession: 'Event Manager',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    photo: './images/team-photo6.jpg',
    name: 'Nico Balletta',
    profession: 'Head of Program',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const speakerBody = document.querySelector('.team-container');

window.onload = () => {
  for (let i = 0; i < speakers.length; i += 1) {
    const deck = document.createElement('div');
    deck.className = 'team-card grid';
    deck.innerHTML = `
    <div class="team-img-box">
      <img src="./images/chest.jpg" alt="chest table image" class="chestbg">
      <img src="${speakers[i].photo}" alt="photograh of team members" class="team-photo">
    </div>
    <div class="team-info flex">
      <h3 class="team-name">${speakers[i].name}</h3>
      <p class="job-position">${speakers[i].profession}</p>
      <span class="job-underline"></span>
      <p class="team-resume">${speakers[i].resume}</p>
    </div>
  `;

    speakerBody.appendChild(deck);
  }
};
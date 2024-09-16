document.addEventListener("DOMContentLoaded", function () {
  const acidArrowButton = document.getElementById("Acid-Arrow");
  const fireballButton = document.getElementById("Fireball");
  const shieldButton = document.getElementById("Shield");
  const spellContent = document.getElementById("spell");

  acidArrowButton.addEventListener("click", () => {
    getSpell("acid-arrow");
  });

  fireballButton.addEventListener("click", () => {
    getSpell("fireball");
  });

  shieldButton.addEventListener("click", () => {
    getSpell("shield");
  });

  function getSpell(spell) {
    axios
      .get(`https://www.dnd5eapi.co/api/spells/${spell}`)
      .then((response) => {
        if (
          response.data.higher_level != undefined &&
          response.data.higher_level.length > 0
        ) {
          spellContent.innerHTML = `<h1>Spell: ${response.data.name}</h1>
          <p><strong>Level:</strong> ${response.data.level}</p>
          <p><strong>Description:</strong> ${response.data.desc}</p>
          <p><strong>At Higher Levels:</strong> ${response.data.higher_level}</p>`;
        } else {
          spellContent.innerHTML = `<h1>Spell: ${response.data.name}</h1>
          <p><strong>Level:</strong> ${response.data.level}</p>
          <p><strong>Description:</strong> ${response.data.desc}</p>`;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

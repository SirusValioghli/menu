const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./src/assets/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./src/assets/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./src/assets/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./src/assets/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./src/assets/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./src/assets/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./src/assets/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./src/assets/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./src/assets/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./src/assets/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const items = document.querySelector("#menu-items");
const container = document.querySelector(".btn-container");

// load-items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayFilter();
});

const displayFilter = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  console.log(categories);
  let categoryBtns = categories
    .map((category) => {
      return `
    <button
            class="btn-filter border-2 mx-2 text-orange-600 border-t-orange-600 border-l-orange-600 border-r-orange-950 border-b-orange-950 px-4 py-[2px] rounded-lg hover:bg-orange-600 hover:text-white hover:duration-700"
            data-id=${category}
          >
            ${category}
          </button>
    `;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-filter");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
      console.log(category);
    });
  });
};

const displayMenuItems = (menuItem) => {
  let displayMenu = menuItem.map((item) => {
    return `
    <div class="flex my-8 justify-center">
    <div>
      <img
      class="w-60 h-40 border-4 rounded-lg border-orange-600"
      src=${item.img}
      alt=""
      />
    </div>
    <div class="pl-4 w-1/2">
      <div
      class="flex justify-between border-b border-b-orange-700 border- border-dotted mb-2"
      >
        <h4 class="text-black tracking-widest font-semibold text-xl">
         ${item.title}
        </h4>
        <span>${item.price} $</span>
      </div>
      <p class="text-justify">
        ${item.desc}
      </p>
    </div>
  </div>`;
  });
  displayMenu = displayMenu.join("");
  items.innerHTML = displayMenu;
};

// filter items

import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const card = [
  {
    id: 1,
    title: "Facebook",
    image: image1,
    url: "https://facebook.com",
  },
  {
    id: 2,
    title: "Twitch",
    image: image2,
    url: "https://twitch.com",
  },
  {
    id: 3,
    title: "Instagram",
    image: image3,
    url: "https://instagram.com",
  },
];

function Cards() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {card.map((items) => (
            <div className="col-md-4" key={items.id}>
              <Card
                title={items.title}
                id={items.id}
                image={items.image}
                url={items.url}
                inf={items.inf}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;

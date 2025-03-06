import { useState, useEffect } from "react";

const Test = () => {
  const [text, setText] = useState(false);
  const [effect, setEffect] = useState(false);

  const identity = "test";

  useEffect(() => {
    if (effect & !text) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [effect, text]);

  const show = () => {
    setText(!text);
    setEffect(true);
  };

  return (
    <>
      <div id="test" className="mb-16 h-auto w-1/2 border-4 border-blue-500">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          maiores voluptatem optio! Eveniet nam ad dicta delectus molestias
          quisquam officia exercitationem quaerat, accusamus beatae laboriosam
          eius sunt vitae sit velit.
        </p>
        {text && (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi modi
            temporibus officiis nam, similique error distinctio rerum dolorum
            fugiat id ducimus dolorem a culpa? Corrupti placeat dolores nulla
            ullam possimus. Perferendis corrupti nesciunt praesentium vero quia,
            odio tenetur atque placeat at fuga delectus totam culpa consequatur
            numquam soluta quos laborum ipsam accusamus doloremque aperiam
            blanditiis voluptas et. Dignissimos, ut perspiciatis. Temporibus
            sunt reiciendis minima quas non voluptate nihil cum natus corporis,
            necessitatibus asperiores soluta quo, repellendus nobis quae
            architecto delectus rerum earum sequi. Debitis dolorem accusantium,
            consequuntur numquam nemo totam?
          </p>
        )}
        <button onClick={show}>Show</button>
      </div>
    </>
  );
};

export default Test;

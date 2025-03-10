import { useState, useEffect } from "react";

import natalya from "../assets/natalya.jpg";

const HeroBlock = () => {
  const [showText, setShowText] = useState(false);
  const [effect, setEffect] = useState(false);

  const identity = "hero";

  useEffect(() => {
    if (effect & !showText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [effect, showText]);

  // useLayoutEffect(() => {
  // 	if (effect && !showText) {
  // 		requestAnimationFrame(() => {
  // 			document.getElementById(identity)?.scrollIntoView({
  // 				behavior: 'smooth',
  // 				block: 'center',
  // 			});
  // 		});
  // 	}
  // }, [effect, showText]);

  const handleClick = () => {
    setShowText(!showText);
    setEffect(true);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="hero"
      // className="mb-4 grid h-fit grid-cols-1 border-4 border-red-500 bg-green-100 p-4 sm:mb-5 sm:p-5 md:mb-6 md:grid md:grid-cols-3 md:gap-6 md:p-6 lg:mb-7 lg:gap-7 lg:p-7 xl:mb-8 xl:gap-8 xl:p-8"
      className="mb-4 grid grid-cols-1 border-4 border-red-500 bg-green-100 p-4 sm:mb-5 sm:p-5 md:mb-6 md:grid md:grid-cols-3 md:gap-6 md:p-6 lg:mb-7 lg:gap-7 lg:p-7 xl:mb-8 xl:gap-8 xl:p-8"
    >
      <div className="mb-4 border-4 border-red-500 sm:mb-5 md:relative md:mb-0">
        <img
          src={natalya}
          alt="Natalya"
          className="mt-6 w-2/3 rounded-full border-8 border-white sm:-mt-7 md:relative md:-top-12 md:-left-0 md:w-full lg:-top-16 xl:-top-20"
        />
      </div>

      <div className="col-span-2 flex min-h-full flex-col justify-between">
        <div className="mb-4">
          <div className="mb-4">
            <p className="mb-4 indent-14">
              <b> Вітаю вас!</b>
            </p>
            <p className="indent-14">
              Мене звати Наталя, і я – підприємець компанії Forever. Два роки
              тому я зробила важливий вибір – розпочати власну справу, яка не
              лише приносить дохід, а й наповнює моє життя сенсом та свободою.
            </p>
            {showText && (
              <div>
                <p className="indent-14">
                  Коли я вперше познайомилася з продукцією Forever, мене вразила
                  її якість і натуральний склад. Я зрозуміла, що хочу не просто
                  користуватися нею сама, а й ділитися цими унікальними
                  продуктами з іншими. Так і почався мій шлях у бізнесі, який
                  відкрив переді мною безліч можливостей.
                </p>
                <p className="indent-14">
                  Сьогодні я з упевненістю можу сказати, що Forever – це більше,
                  ніж просто продукція. Це стиль життя, це можливість
                  піклуватися про своє здоров’я, виглядати чудово та почуватися
                  енергійною кожного дня. Крім того, це шанс для кожного, хто
                  хоче змінити своє життя та знайти фінансову незалежність.
                </p>
                <p className="indent-14">
                  Якщо ви хочете спробувати якісну продукцію Forever або
                  дізнатися більше про можливості, які вона відкриває, буду рада
                  допомогти вам підібрати ідеальний варіант саме для вас.
                  Напишіть мені – з радістю поділюся своїм досвідом та підкажу
                  найкраще рішення для ваших потреб!
                </p>
                <br />
                <p className="indent-14">
                  <b>Вітаю вас!</b>
                </p>
                <p className="indent-14">
                  Мене звати Наталя, і я підприємець компанії Forever. Два роки
                  тому я вирішила розпочати власну справу, яка дозволяє мені
                  поєднувати якісні продукти для здоров’я та можливість
                  розвитку.
                </p>
                <p className="indent-14">
                  Продукція Forever привернула мою увагу своїм натуральним
                  складом і високими стандартами якості. Я спробувала її сама,
                  переконалася в результатах і вирішила поділитися цим з іншими.
                  Так я прийшла до бізнесу, який став для мене не лише роботою,
                  а й способом зробити щось корисне для людей.
                </p>
                <p className="indent-14">
                  Forever – це можливість підтримувати здоров’я, доглядати за
                  собою та обирати якісні продукти. Якщо вам цікаво дізнатися
                  більше або спробувати продукцію, буду рада відповісти на
                  запитання та допомогти з вибором.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="cursor-pointer text-green-500"
            >
              {showText ? "Згорнути" : "Читати більше..."}
            </button>
          </div>
        </div>
        <div className="mt-auto border-4 border-red-500">
          <button
            onClick={scrollToFooter}
            className="flex w-full items-center bg-blue-300 p-4 hover:bg-red-300"
          >
            <p className="flex h-full w-full items-center justify-center text-center font-bold">
              Зв&apos;яжіться зі мною
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;

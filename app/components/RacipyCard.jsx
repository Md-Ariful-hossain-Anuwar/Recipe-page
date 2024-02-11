import React, { Fragment } from "react";
import Food from "../images/food.jpeg";
import Image from "next/image";

const RacipyCard = () => {
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="shadow-md w-[500px] h-[800] bg-white p-8">
          {/* Image here */}
          <div>
            <Image src={Food} />
          </div>
          <div>
            <h1 className="text-2xl mt-6 font-bold text capitalize">
              simple omelette recipe
            </h1>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, voluptatibus ad quis eius exercitationem dicta
              perferendis sapiente sint eum iste?
            </p>
          </div>
          <hr />
          {/* preparation time here */}
          <div className="mt-6">
            <h1 className="capitalize text-lg text-purple-800 font-bold">
              Preparation time
            </h1>
            <ul className="mt-4 leading-8 list-disc list-inside">
              <li className="ml-10 text-gray-600">
                <b>Total:</b> Apporximately 10 minite
              </li>
              <li className="ml-10 text-gray-600">
                <b>Preparation:</b> 5 minite
              </li>
              <li className="ml-10 text-gray-600">
                <b>Cooking:</b> Apporximately 10 minite
              </li>
            </ul>
          </div>
          <hr />
          {/* Ingredients */}
          <div>
            <h2 className="text-lg capitalize text-purple-700 font-bold mt-5">
              Ingredients
            </h2>
            <ul className="mt-5 leading-8 list-disc list-inside">
              <li className="ml-10 text-gray-600">2-3 large eggs</li>
              <li className="ml-10 text-gray-600">Salt,to taste</li>
              <li className="ml-10 text-gray-600">pepper, to taste</li>
              <li className="ml-10 text-gray-600">
                1 tablespoon of butter or oil
              </li>
              <li className="ml-10 text-gray-600">
                optinal fillging: cheese,died vagetable,cooked meats, herbs
              </li>
            </ul>
          </div>
          <hr />
          {/* Instructions */}
          <div>
            <h2 className="text-lg capitalize text-purple-700 font-bold mt-5">
              Instructions
            </h2>
            <ul type="A" className="mt-5 leading-8 list-disc list-inside">
              <li className="ml-10 text-gray-600">
                <b>Beat the eggs:</b>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facilis, nisi.
              </li>
              <li className="ml-10 text-gray-600">
                <b>Health the pan:</b>Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Mollitia, debitis!
              </li>
              <li className="ml-10 text-gray-600">
                <b>Cook the omelette:</b>Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Voluptatum, iste!
              </li>
              <li className="ml-10 text-gray-600">
                <b>Add fliigne(optinal):</b> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Nesciunt, consectetur.
              </li>
              <li className="ml-10 text-gray-600">
                <b>Fold and serve:</b> Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Adipisci, ut.
              </li>
              <li className="ml-10 text-gray-600">
                <b>Enjoy:</b> Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quam, velit.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RacipyCard;

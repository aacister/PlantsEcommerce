import clsx from "clsx";
import * as plantUtil from "sharedComponents/util";
import { useState } from "react";
import * as cartService from "services/cart";

const PlantPurchaseOptions = (props) => {
  const { plant, imgIdx, setImgIdx } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="my-10">
        <div className="text-emerald-700 flex">
          <i className="fa-sharp fa-solid fa-brush text-2xl mr-2"></i>
          <div className="text-lg">Pot Colors</div>
        </div>
        <div className="flex my-4">
          {plant.images.map((img, idx) => (
            <div
              key={img.pot_color}
              className="flex flex-col items-center mx-2"
              onMouseEnter={() => setImgIdx(idx)}
            >
              <div
                className={clsx(
                  "rounded-full w-10 h-10",
                  plantUtil.POT_COLORS[img.pot_color],
                  idx === imgIdx && "outline outline-offset-2 outline-slate-500"
                )}
              ></div>
              <div
                className={clsx(
                  "mt-1",
                  idx === imgIdx ? "text-slate-700" : "text-slate-500"
                )}
              >
                {img.pot_color}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center rounded-full text-xl text-slate-500 border-2 border-slate-300 px-3 py-4">
          <button
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          >
            <i class="fa-solid fa-minus"></i>
          </button>
          <div className="text-2xl text-emerald-700 mx-4">{quantity}</div>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          onclick={async () => {
            setIsLoading(true);
            const response = await cartService.addToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imgIdx].pot_color,
            });
            setIsLoading(false);
            console.log(response.status);
          }}
          className=" ml-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-xl text-white flex flex-1 items-center justify-center px-2 py-4"
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner mr-1 text-2xl animate-spin"></i>
          ) : (
            <i className="fa-solid fa-cart-shopping text-2xl mr-1"></i>
          )}
          <div>Add to Cart</div>
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;

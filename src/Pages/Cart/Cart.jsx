import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveToCart } from "../../Redux/Action/action";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const cartData = useSelector((state) => state.cartData);
  // const { restaurantName } = useSelector((state) => state.CuisineData);
  console.log("cartData", cartData);

  let TotalAmount = cartData.length
    ? cartData.map((item) => item.foodPrice).reduce((prev, next) => prev + next)
    : 0;

  const [toPay, setToPay] = useState(TotalAmount);

  const discount = () => {
    if (TotalAmount > 299) {
      const discountedPrice = TotalAmount - TotalAmount / 10;
      setToPay(discountedPrice);
    } else {
      alert("Your Total amount is less than 299. Please add more items.");
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="container px-5 mt-5">
      {cartData.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="d-flex justify-content-between gap-5">
          <div className="w-75 " style={{ height: "75vh", overflowY: "auto" }}>
            <h2 className="ms-2">YOUR CUISINE</h2>
            <table className="table table-bordered table-hover text-center">
              <thead>
                <tr>
                  <th>Cuisine</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.foodImg}
                        alt={item.foodName}
                        className="rounded cart_img"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{item.foodName}</td>
                    <td>₹{item.foodPrice}</td>
                    <td>
                      <button
                        onClick={() => dispatch(RemoveToCart(item._id))}
                        className="btn btn-danger btn-sm"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-25 d-flex flex-column ">
            <h2 className="ms-2">CASH MEMO</h2>
            <table className="table table-bordered text-start">
              <tbody>
                <tr>
                  <td className="fw-bold">Total Amount</td>
                  <td>₹{TotalAmount}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Discount</td>
                  <td>
                    <button
                      onClick={discount}
                      className="btn btn-success btn-sm"
                    >
                      Apply: 10%
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">To Pay</td>
                  <td>₹{toPay ? toPay : TotalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

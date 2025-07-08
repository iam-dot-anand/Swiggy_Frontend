import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveToCart } from "../../Redux/Action/action";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.foodPrice * item.quantity,
    0
  );

  const [toPay, setToPay] = useState(totalPrice);
  useEffect(() => {
    setToPay(totalPrice);
  }, [totalPrice]);

  const discount = () => {
    if (totalPrice > 299) {
      const discountedPrice = totalPrice - totalPrice / 10;
      setToPay(discountedPrice);
    } else {
      alert("Your Total amount is less than ₹299. Please add more items.");
    }
  };

  return (
    <div className="container px-5 mt-5">
      {cartData.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="row">
          <div
            className="col-lg-8 col-md-7 mb-4"
            style={{ maxHeight: "75vh", overflowY: "auto" }}
          >
            <h2 className="mb-3">Order Details</h2>
            <table className="table  table-hover align-middle text-center">
              <thead className="">
                <tr>
                  <th scope="col">Cuisine</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={item.foodImg}
                        alt={item.foodName}
                        className="rounded"
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
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button
                          onClick={() => dispatch(RemoveToCart(item))}
                          className="btn btn-danger btn-sm"
                        >
                          −
                        </button>
                        <span className="fw-bold">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(AddToCart(item))}
                          className="btn btn-success btn-sm"
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-lg-4 col-md-5">
            <h2 className="mb-3">Bill Details</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td className="fw-bold">Total Amount</td>
                  <td>₹{totalPrice}</td>
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
                  <td className="fw-bold">
                    <button
                      className="orange btn border border-secondary rounded bg-light"
                      onClick={()=>setTimeout(()=>alert("Order Completed"),500)}
                    >
                      To Pay
                    </button>
                  </td>
                  <td>₹{toPay}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useReducer } from "react";
//
type ProductType = {
  pId: number;
  pName: string;
  pPrice: number;
  pQuantity: number | null;
};

type InitStateType = {
  productList: ProductType[];
  selectedProduct: ProductType[];
};

type ActionType = {
  type: "ADD_P" | "DELETE_P";
  payload: ProductType;
};

//

let initialState = {
  productList: [
    {
      pId: 1,
      pName: "Cycle",
      pPrice: 2000,
      pQuantity: 0,
    },
    {
      pId: 2,
      pName: "Mixer",
      pPrice: 1400,
      pQuantity: 0,
    },
  ],
  selectedProduct: [],
};

// reducer function
export const shoppingReducer = (state: InitStateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_P":
      if (
        !state.selectedProduct.find((item) => item.pId === action.payload.pId) // product is not already added
      ) {
        return {
          ...state,
          selectedProduct: [...state.selectedProduct, { ...action?.payload }],
        };
      }
      return state;
    case "DELETE_P":
      return {
        ...state,
        selectedProduct: state.selectedProduct.filter(
          (item) => item.pId !== action.payload.pId
        ),
      };
    default:
      return state;
  }
};

// component
const Shopping: React.FC = () => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  // Add product in cart.
  const addProduct = (obj: ProductType) => {
    console.log(obj);
    dispatch({
      type: "ADD_P",
      payload: obj,
    });
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="font-extrabold mb-4">Select Products</h3>
          {(state.productList || []).map((item: ProductType) => {
            return (
              <div
                className="cursor-pointer"
                key={item.pId}
                onClick={() => addProduct(item)}
              >
                {item.pName} - {item.pPrice}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col bottom-1 ">
          <h3 className="font-extrabold mb-4">Products in Carts</h3>
          {(state.selectedProduct || []).map((item: ProductType) => {
            return <div key={item.pId}>{item.pName}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shopping;

import { memo, useEffect, useState } from "react";
import type { IResponseUser, IUser } from "../../types";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState<null | IResponseUser>(null);
  // const [error, setError] = useState<null | any>(null)
  // const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => setData(res.data));
  }, []);

  return (
    <div className="Product py-5 bg-white min-h-screen">
      <div className="container mx-auto px-2">
        <h2 className="text-2xl font-semibold mb-4 text-black">Products</h2>

        <div className="grid gap-6 grid-cols-4">
          {data?.users?.map((item: IUser) => (
            <div
              key={item.id}
              className="border border-black bg-white flex flex-col rounded-[15px]"
            >
              <div className="w-full h-32 border-b border-black flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.firstName}
                  className="h-20 w-20"
                />
              </div>

              <div className="p-2 text-left">
                <h3 className="text-base font-bold text-black">
                  {item.firstName} {item.lastName}
                </h3>
                <p className="text-xs text-black">{item.email}</p>
                <div className="mt-2">
                  <span className="text-sm text-black">Age: {item.age}</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-black">
                    phone: {item.phone}
                  </span>
                </div>
                <button className="mt-2 w-full border border-black text-black text-sm py-1 rounded-[5px]">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Users);

import { ArrowBigLeft } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: user } = location;
  console.log(user);

  return (
    <div className="px-6 mt-2 mb-3">
      <button onClick={() => navigate(-1)}>
        <ArrowBigLeft />
      </button>

      <h3 className="text-center uppercase text-xl">
        {user.mode == "creation"
          ? "cree nouvel"
          : user.mode == "modification"
          ? "modifier details"
          : "voir details "}
      </h3>

      <div id="form" className="flex mt-3">
        <form className=" min-w-[25rem] space-y-3">
          <div>
            <label htmlFor="" className="block">
              genre
            </label>
            <input
              defaultValue={user && user.genre}
              type="text"
              className="w-full rounded p-1 bg-gray-100 border"
            />
          </div>

          <div>
            <label htmlFor=" " className="block">
              nom
            </label>

            <input
              defaultValue={user && user.name}
              type="text"
              className="w-full bg-gray-100 border rounded p-1"
            />
          </div>
          <div>
            <label htmlFor="" className="block">
              telephone
            </label>
            <input
              defaultValue={user && user.telephone}
              type="text"
              className="w-full rounded p-1 bg-gray-100 border"
            />
          </div>

          <div>
            <label htmlFor="" className="block">
              etat civil
            </label>
            <input
              defaultValue={user && user.etat && user.etat.civile}
              type="text"
              className="w-full rounded p-1 bg-gray-100 border"
            />
            <div>
              <label htmlFor="" className="block">
                nombre d'enfant
              </label>
              <input
                defaultValue={user && user.etat && user.etat.nb_enfants}
                type="text"
                className="w-full rounded p-1 bg-gray-100 border"
              />
              <div>
                <label htmlFor="" className="block">
                  adresse
                </label>
                <textarea
                  rows={6}
                  type="text"
                  className="w-full rounded p-1 bg-gray-100 border"
                  defaultValue={user && user.adresse}
                />
                <div>
                  {user.mode != "visualisation" && (
                    <div className="flex justify-end ">
                      <button
                        className={`${
                          user.mode == "creation"
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-orange-500 hover:ng-orang-600"
                        } 
                      bg-blue-500 text-white rounded p-1 px-2 hover:bg-blue-600 `}
                      >
                        {user.mode == "creation"
                          ? "cree nouvel"
                          : user.mode == "modification"
                          ? "modifier "
                          : "voir details "}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="flex-1 flex justify-center">
          <img className=" h-24 mt-6 rounded" src={user.imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default User;

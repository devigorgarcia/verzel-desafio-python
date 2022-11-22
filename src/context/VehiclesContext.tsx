import { createContext, useState, ReactNode, useEffect } from "react";
import { api } from "../api";
import { IEditVehicle } from "../components/ModalEdit";
import { ICreateVehicle } from "../components/ModalCreateVehicle";
import { toastError, toastSucess } from "../utils/toast";

interface IVehiclesChildren {
  children: ReactNode;
}

export interface IVehicles {
  id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  price: number;
  userId: string;
}

interface IVehiclesData {
  vehicles: IVehicles[];
  selectHandler: (e: string) => void;
  filterByInput: (e: string) => void;
  createNewVehicle: (data: ICreateVehicle) => void;
  editVehicle: (data: IEditVehicle, vehicleId: string) => void;
  deleteVehicle: (id: string) => void;
}

export const VehiclesContext = createContext<IVehiclesData>([] as any);

export const VehiclesProvider = ({ children }: IVehiclesChildren) => {
  const token = localStorage.getItem("@Verzel:Token");

  const [vehicles, setVehicles] = useState<IVehicles[]>([] as IVehicles[]);
  const [sort, setSort] = useState<IVehicles[]>([]);
  const [recents, setRecents] = useState(false);

  const getAllVehicles = async () => {
    await api.get("/vehicles/").then((res) => setVehicles(res.data.reverse()));
    return vehicles;
  };

  useEffect(() => {
    getAllVehicles();
  }, [recents]);

  const selectHandler = (e: string) => {
    if (e === "price") {
      const sortVehicles = orderByPrice();
      setSort(sortVehicles);
    } else if (e === "new") {
      setRecents(!recents);
    }
  };

  const orderByPrice = () => {
    const sortedVehicles = vehicles.sort(
      (a: any, b: any) => parseFloat(a.price) - parseFloat(b.price)
    );
    return sortedVehicles;
  };

  const filterByInput = (input: string) => {
    if (input.length === 0) {
      setRecents(!recents);
    } else {
      const filtredInput = vehicles.filter((vehicle) =>
        vehicle.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      );
      setVehicles(filtredInput);
    }
  };

  const createNewVehicle = async (data: ICreateVehicle) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .post("/vehicles/", data)
      .then((res) => {
        toastSucess("Veiculo Cadastrado Com Sucesso");
        getAllVehicles();
      })
      .catch((err) => {
        toastError("Algo não de certo =(");
      });
  };

  const editVehicle = async (data: IEditVehicle, id: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .patch(`/vehicles/${id}/`, data)
      .then((res) => {
        toastSucess("Alteração feita com sucesso");
        getAllVehicles();
      })
      .catch((err) => {
        toastError("Algo não de certo =(");
      });
  };

  const deleteVehicle = async (id: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .delete(`/vehicles/${id}/`)
      .then((res) => {
        toastSucess("Veiculo deletado com sucesso");
        getAllVehicles();
      })
      .catch((err) => {
        toastError("Algo não de certo =(");
      });
  };

  return (
    <VehiclesContext.Provider
      value={{
        vehicles,
        selectHandler,
        filterByInput,
        createNewVehicle,
        editVehicle,
        deleteVehicle,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};

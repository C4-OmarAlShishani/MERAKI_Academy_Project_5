/** @format */

const initialState = {
  services: [],
  serviceInfo ={}
};
// =======================  //

const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_SERVICE":
      return { ...state, services: payload };

    case "SET_SERVICEINFO":
      return { ...state, serviceInfo: payload };

    case "ADD_SERVICE":
      return { ...state, services: [...state.services, payload] };

    case "DELETE_SERVICE":
      return {
        ...state,
        services: state.services.filter((service) => {
          return service.id !== payload;
        }),
      };
    case "UPDATE_SERVICE":
      return {
        ...state,
        services: state.services.map((service) => {
          if (service.id === payload.id) {
            return payload;
          }
          return service;
        }),
      };

    default:
      return state;
  }
};

export default serviceReducer;

export const setService = (services) => {
  return { type: "SET_SERVICE", payload: services };
};
// =======================  //
export const setServiceInfo = (servicesInfo) => {
  return { type: "SET_SERVICEINFO", payload: servicesInfo };
 
};
export const addService = (newService) => {
  return { type: "ADD_SERVICE", payload: newService };
};
// =======================  //

export const updateService = (newService) => {
  return { type: "UPDATE_SERVICE", payload: newService };
};
// =======================  //

export const deleteService = (id) => {
  return { type: "DELETE_SERVICE", payload: id };
};
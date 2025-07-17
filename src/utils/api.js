import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, data) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData?.message || "Something went wrong",
        success: false,
      };
    }
  } catch (error) {
    console.log("Error posting data:", error);
    return {
      error: true,
      message: error?.message || "Something went wrong",
      success: false,
    };
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(apiUrl + url, params);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadImage = async (url, data) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const res = await axios.put(apiUrl + url, data, params);
  return res;
};

export const editData = async (url, data) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      "Content-Type": "application/json",
    },
  };

  const res = await axios.put(apiUrl + url, data, params);
  return res;
};

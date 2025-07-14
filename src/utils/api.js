import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, data) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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

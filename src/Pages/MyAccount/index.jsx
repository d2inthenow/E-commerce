import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountSideBar from "../../components/AccountSideBar";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { editData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
const MyAccount = () => {
  const context = useContext(MyContext);
  const history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");

    if (token === null || token === undefined || token === "") {
      history("/login");
    }
  }, [context?.isLogin]);

  useEffect(() => {
    if (context?.userData?._id !== undefined && context?.userData?._id !== "") {
      setUserId(context?.userData?._id);
      setFormFields({
        name: context?.userData?.name,
        email: context?.userData?.email,
        mobile: context?.userData?.mobile,
      });
    }
  }, [context?.userData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { name, email, mobile } = formFields;

    if (!email || !name || !mobile) {
      context.openAlertBox("error", "Please fill all the fields");
      setIsLoading(false);
      return;
    }

    editData(`/api/user/${userId}`, formFields, {
      withCredentials: true,
    })
      .then((res) => {
        if (res?.error !== true) {
          context.openAlertBox("success", res?.data?.message);

          context.setUserData({
            ...context.userData,
            name,
            email,
            mobile,
          });

          setFormFields({ name, email, mobile });
        } else {
          context.openAlertBox("error", res?.data?.message || "Update failed");
        }
      })
      .catch((error) => {
        console.error("Update error:", error);
        context.openAlertBox("error", "Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const clear = () => {
    setFormFields({
      name: "",
      email: "",
      mobile: "",
    });
  };

  const valideValues = Object.values(formFields).every((el) => el);

  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white !p-5 shadow-md rounded-md">
            <h2 className="!pb-3">
              My Profile <hr />
            </h2>
            <form className="!mt-4" onSubmit={handleSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="name"
                    value={formFields.name}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="email"
                    value={formFields.email}
                    disabled={true}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="flex items-center !mt-5 ">
                <div className="w-[50%]">
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="mobile"
                    value={formFields.mobile}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <br />

              <div className="flex items-center gap-4">
                <Button
                  disabled={!valideValues}
                  type="submit"
                  className="btn-org btn-lg w-[100px]"
                >
                  {isLoading ? <CircularProgress color="inherit" /> : "Update"}
                </Button>
                <Button
                  onClick={clear}
                  className="btn-org btn-lg btn-border w-[100px]"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;

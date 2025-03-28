import { useState } from "react";
import Shield from "../../../assets/images/Footer/shield.jpg";
import OtpBox from "../../OtpBox";
import Button from "@mui/material/Button";
const Verify = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    alert(`OTP is ${otp}`);
  };
  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] !m-auto rounded-md bg-white !p-5 !px-10">
          <div className="text-center flex items-center justify-center">
            <img src={Shield} width="80" />
          </div>
          <h3 className="text-[18px] font-[600] text-black text-center !mt-4 !mb-1">
            Verify OTP
          </h3>

          <p className="text-center !mt-0">
            Otp send to email :{" "}
            <span className="text-[#ff5252] font-bold">
              Duong0023@gmail.com
            </span>
          </p>

          <form onSubmit={verifyOTP}>
            <OtpBox length={6} onChange={handleOtpChange} />

            <div className="flex items-center justify-center !mt-5 !px-15">
              <Button type="submit" className="btn-org w-full ">
                Verify
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;

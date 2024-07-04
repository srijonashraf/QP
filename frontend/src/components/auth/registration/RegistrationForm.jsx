import React from "react";
import { NavLink } from "react-router-dom";
import countryCode from "../../../data/countryCode";

const RegistrationForm = () => {
  return (
    <div className="w-full lg:max-w-[415px] bg-white rounded-md p-6">
      <form action="" className="flex flex-col gap-3">
        <h3 className="font-[700] text-brand-primary text-xl">
          Register your Account
        </h3>
        <div className="flex flex-row gap-2">
          <div className="w-full flex flex-col">
            <label
              htmlFor="firstName"
              className="font-semibold text-sm font-manrope"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2"
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="lastName"
              className="font-semibold text-sm font-manrope"
            >
              Last Name
            </label>
            <input
              id="lastName"
              placeholder="Last Name"
              type="text"
              className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold text-sm font-manrope">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="font-semibold text-sm font-manrope"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 rounded border border-slate-400 outline-none focus:border-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dob" className="font-semibold text-sm font-manrope">
            Date of Birth
          </label>
          <div className="flex flex-row gap-2">
            <select
              name="dobMonth"
              id="dobMonth"
              className="w-1/2 p-2 rounded border border-slate-400 outline-none 
              focus:border-2 font-inter font-medium text-[14px]"
            >
              <option value="">MM</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="dobDay"
              id="dobDay"
              className="w-1/2 p-2 rounded border border-slate-400 outline-none 
              focus:border-2 font-inter font-medium text-[14px]"
            >
              <option value="">DD</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="dobYear"
              id="dobYear"
              className="w-full p-2 rounded border border-slate-400 outline-none 
              focus:border-2 font-inter font-medium text-[14px]"
            >
              <option value="">YYYY</option>
              {[...Array(new Date().getFullYear() - 1899)].map((_, i) => (
                <option key={i + 1900} value={i + 1900}>
                  {i + 1900}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="font-semibold text-sm font-manrope"
          >
            Phone Number
          </label>
          <div className="flex flex-row rounded border border-slate-300 outline-none">
            <select
              name="country"
              id="country"
              className="w-1/3 p-2 rounded outline-none focus:border-2 focus:border-slate-400 
              font-inter font-medium text-[14px]"
            >
              {countryCode.map((country, index) => (
                <option key={index} value={country.code}>
                  {`${country.code} (${country.dial_code})`}
                </option>
              ))}
            </select>
            <input
              id="phoneNumber"
              type="tel"
              className="w-full p-2 rounded outline-none focus:border-2 focus:border-slate-400 
              font-inter font-medium text-[14px]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="gender"
            className="font-semibold text-sm font-manrope"
          >
            Your Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="w-full p-2 rounded border border-slate-300 outline-none focus:border-2 
            focus:border-slate-400 font-inter font-normal text-sm"
          >
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="flex items-center gap-1">
          <input type="checkbox" name="allow_terms" id="allow_terms" />
          <p className="text-[12px] max-sm:text-[11px] font-manrope font-[400]">
            I accept the{" "}
            <span className="font-semibold text-brand-primary text-[13px] max-sm:text-[11px]">
              Terms and Conditions{" "}
            </span>
            of this website
          </p>
        </div>
        <div>
          <button
            className="w-full bg-brand-primary p-3
        rounded-[4px] text-white font-manrope font-semibold text-base my-2 hover:bg-brand-primary/80"
          >
            Complete Registration!
          </button>
          <div className="flex flex-col items-center mt-[6px] gap-2">
            <p className="font-manrope text-sm font-medium text-slate-500">
              <span>_____</span> or sign up with <span>_____</span>
            </p>
            <p className="font-manrope text-sm font-normal">
              Already have an Account?
              <span>
                <NavLink
                  to="/login"
                  className="font-manrope text-sm text-brand-primary font-bold"
                >
                  {" "}
                  Login here
                </NavLink>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

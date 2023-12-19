import NavBtn from "../../Components/Button/NavBtn";
import { ASSETS } from "../../assets/path";

export const Subscribed = ({}) => {
  return (
    <div>
      <div className=" flex justify-center m-5">
        <img src={ASSETS.PROFILES.ROBO} className="h-10 w-10" />
      </div>
      <p className="text-sm text-textgray">
      It's very important to have a customer service, but it's just the way it is
        in time they occur as with great labor and pain. For at least
        Come on, no one should practice any kind of work except as some of it
        good luck Doubts or irure pain in reprimanding in pleasure
        He wants to be a hair, let him run away from the pain, and no one will give birth. They are an exception
        dark lusts do not come forth; those who forsake their duties are in fault
        it softens the soul, that is, the sufferings
      </p>
      <div className="flex gap-5 justify-center p-10 text-black">
        <NavBtn text="Inscription" bgcolor="#A1FEDA" />
        <NavBtn text="Cancel" bordercolor="black" />
      </div>
    </div>
  );
};

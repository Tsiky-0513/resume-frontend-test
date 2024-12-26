import CustomForm from "../custom-form/custom-form";
import Image from "next/image";
import "./personal-info-style.css"


export default function PersonalInfo() {
    return (
        <>
            <h4 className="text-personal-info">
                Personal Information
            </h4>
            <div className="personal-info-container">
                <div className="form-container">
                    <CustomForm />
                </div>
                <div className="image-personal-info">
                    <Image
                        width={144}
                        height={144}
                        src="/images/customer-photo.png"
                        alt="Customer Photo"
                        className="image-user"
                    />
                </div>
            </div>
        </>
    );
}

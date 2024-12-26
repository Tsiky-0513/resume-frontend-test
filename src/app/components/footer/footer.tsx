import Link from "next/link";
import "./footer-style.css";

export default function Footer() {
  return (
    <div className="link-container">
      <Link href="#" className="link-footer">
        Terms & Conditions
      </Link>
      <Link href="#" className="link-footer">
        Privacy Policy
      </Link>
      <Link href="#" className="link-footer">
        FAQ
      </Link>
      <Link href="#" className="link-footer">
        Contact Us
      </Link>
    </div>
  );
}

import Link from "next/link";
import './show-profile-style.css';

export function ShowProfile() {
    return (
        <div className="delete-account-container">
            <div className="checkbox-container">
                <input
                    className="custom-checkbox"
                    type="checkbox"
                    id="show-profile-checkbox"
                />
                <label htmlFor="show-profile-checkbox">
                    Show my profile to serious employers on <Link href='#' className='link'>hirethesbest.io</Link> for free
                </label>
            </div>
            <div className="confirmation-container">
                <h3>Delete account</h3>
                <p>
                    If you delete your account, you'll be permanently removing it from our
                    systems - you can't undo it.
                </p>
                <button className="delete-button">Yes, Delete my account</button>
            </div>
        </div>
    );
}

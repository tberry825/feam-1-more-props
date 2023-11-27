import React from 'react';

class UserProfile extends React.Component {
    render() {
        return (
            <div className="user-profile">
                <h2>User Profile</h2>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Age:</strong> 30</p>
                <p><strong>Location:</strong> New York</p>
                {/* More hardcoded user details can be added here */}
            </div>
        );
    }
}

export default UserProfile;

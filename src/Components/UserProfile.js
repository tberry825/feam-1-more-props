// import React from 'react';

function UserProfile (props) {
    const { name, age, location } = props;
     
    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Age:</strong> 30</p>
            <p><strong>Location:</strong> New York</p>
            {/* More hardcoded user details can be added here */}
            <h2>User Profile2</h2>
            <p><strong>Name:</strong> Mary Jo</p>
            <p><strong>Age:</strong> 35</p>
            <p><strong>Location:</strong> Los Angeles</p>
            <h2>User Profile3</h2>
            <p><strong>Name:</strong> John Dear</p>
            <p><strong>Age:</strong> 40</p>
            <p><strong>Location:</strong> Houston</p>
        </div>
    );

}

export default UserProfile;

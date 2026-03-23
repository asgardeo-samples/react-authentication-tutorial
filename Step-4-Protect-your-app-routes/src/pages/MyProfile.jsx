import { useState } from 'react'
import { useAsgardeo } from '@asgardeo/react'

function MyProfile() {
    const { http, isSignedIn } = useAsgardeo();
    const [userData, setUserData] = useState(null);

    const getProfile = async () => {
        const response = await http.request({
            url: 'https://api.asgardeo.io/t/[your-organization-name]/scim2/Me',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/scim+json',
            },
        });
        setUserData(response.data);
    };

    if (!isSignedIn) {
        return <div>Please sign in to view your profile.</div>;
    }

    return (
        <div>
            <h2>My Profile</h2>
            <button onClick={getProfile}>Get My Profile</button>
            {userData && (
                <div>
                    <p> Given Name : {userData.name.givenName}</p>
                    <p> FamilyName Name : {userData.name.familyName}</p>
                </div>
            )}
        </div>
    )
}

export default MyProfile;
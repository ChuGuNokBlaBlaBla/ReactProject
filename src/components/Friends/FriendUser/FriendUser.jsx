import React from 'react';
import FreindsProfileGet from './FrinedProfile';

const FriendUsers = (props) => props.listFriends.map((f) => <FreindsProfileGet key={f.id} id={f.id} src={f.src} name={f.name} message={f.message} />)

export default FriendUsers;
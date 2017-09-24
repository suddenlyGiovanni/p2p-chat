// REACT
import React from 'react';

// MATERIAL-UI
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// ICONS
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';


const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip='edit friendship status'
        tooltipPosition='bottom-left'
    >
        <MoreVertIcon color={ grey400 } />
    </IconButton>
);

const Users = props => {
    console.log( 'Users - RENDER - this.props: ', props );
    const { handleFriendshipChange } = props;

    const listUsers = props.users.map( ( pendingFriend ) => {
        const { uid, firstName, lastName, profilePic } = pendingFriend;
        const rightIconMenu = (
            <IconMenu
                iconButtonElement={iconButtonElement}
                onItemTouchTap={ () => handleFriendshipChange( uid, 'ACCEPTED' ) }>
                <MenuItem
                    value='FRIEND REQ'
                    primaryText='MAKE FRIEND REQ'
                    leftIcon={<SocialPersonAdd />}/>
            </IconMenu>
        );
        return (
            <div>
                <ListItem
                    primaryText={`${firstName} ${lastName}`}
                    leftAvatar={<Avatar src={profilePic} />}
                    rightIconButton={rightIconMenu}
                />
                <Divider inset={true} />
            </div>
        );
    } );


    return (
        <List>
            <Subheader>People that you might know</Subheader>
            {listUsers}
        </List>
    );
};


export default Users;

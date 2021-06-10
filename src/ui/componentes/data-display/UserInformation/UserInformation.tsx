import React from 'react';
import {
    UserInformationContainer,
    UserName,
    UserDescription,
    AvatarStyled,
    RaitingStyled,
} from './UserInformation.style';

interface UserInformationProps {
    picture: string;
    name: string;
    rating: number;
    description?:string;
}

const UserInformation: React.FC<UserInformationProps> = ({
    name, picture, rating, description
}) => {
    return (
      <UserInformationContainer>
        <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
        <UserName>{name}</UserName>
        <RaitingStyled readOnly value={rating} />
        <UserDescription>{description}</UserDescription>
      </UserInformationContainer>
    );
};

export default UserInformation;
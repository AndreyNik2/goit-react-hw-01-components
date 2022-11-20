import styled from "@emotion/styled";

export const Offline = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #ff0000;
`;

export const Online = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #00ff1e;
`;

export const ListOFFriends = styled.ul`
list-style: none;
padding-inline-start: 0px;
display: flex;
flex-wrap: wrap;
gap: 20px;
`;

export const ListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-around;
background-color: #fff;
width:450px;
height: 150px;
`;

export const Avatar = styled.img`
display: block;
`;

export const FriendName = styled.p`
font-size: 30px;
font-weight: 700;
`;


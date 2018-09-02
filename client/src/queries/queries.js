import { gql } from 'apollo-boost';

const getTeches = gql`
    {
        teches{
            id
            seq
            name
            url
            foundation
            imgUrl
            type
            desc
        }
    }
`;

const getTechQuery = gql`
    query GetTech($id: String!){
        tech(id:$id){
            id
            name
            url
            foundation
            imgUrl
            type
            desc
        }
    }
`;

const getMembers = gql`
    {
        members{
            id
            seq
            name
            intro
            section
            imgUrl
        }
    }
`;

const getMember = gql`
    query GetMember($id: String!){
        member(id:$id){
            id
            name
            intro
            section
            imgUrl
        }
    }
`;

const getTimelines = gql`
    {
        timelines{
            id
            seq
            title
            subtitle
            content
            cDate
        }
    }
`;

export { getTeches, getTechQuery, getMembers, getTimelines };
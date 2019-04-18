export interface Events {
    id : string;
    title : string;
    description : string;

    authorId : string;
    authorName : string;
    authorEmail : string;
    authorUrl : string;

    locationType : string;
    coordinates : number

    calendar : string;
    createAt : string;
    updateAt : string;
    comments : string;

    tags : string;
}

export interface EventGroups {
    id : string;
    title : string;
    image : string;
}
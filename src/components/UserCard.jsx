function UserCard(props) {
    return (
        <div>
            <img src={props.picture.large} alt="Picture" />
            <h4>{props.name.first} {props.name.last}</h4>
            <p>{props.location.city}, {props.location.state}, {props.location.country}</p>
            <p>{props.phone}</p>
            <a href="">{props.email}</a>
        </div>
    );
}

export default UserCard;
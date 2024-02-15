export const Profile = ({
    name, tag, location, image, stats
}) => {
    return (
        <div>
            <div>
                <img src={image} alt="User avatar" />
                <p>{name}</p>
                <p> {tag} </p>
                <p> {location} </p>
            </div>
            <ul>
                <li>
                    <span>Folovers</span>
                    <span> {stats} </span>
                </li>
                <li>
                    <span>Vievs</span>
                    <span> {stats} </span>
                </li>
                <li>
                    <span>Likes</span>
                    <span> {stats} </span>
                </li>
            </ul>
        </div>
        
    )
}

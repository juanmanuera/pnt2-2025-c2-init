import "./user.css";

export default function User({user}){
    return (
        <div className="user-content">
            <div className="user-info">
                <img src={`/images/${user.image}`} alt={`Foto de ${user.name}`} className="user-image" />
            </div>
        </div>
    )
}
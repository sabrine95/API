import './Style.css';

const ListOfUsers = ({ userData }) => {
    return (
    <div className="card">
        <div className="card__title"> Name: {userData.name} <br/>
        UserName: {userData.username}</div>
            <div className="card__body">
                <div className="email"/><h2> Email: {userData.email}</h2></div>
                <div className="address">
                <p> Street: {userData.address.street}</p>
                <p> Suite: {userData.address.suite}</p>
                <p>City: {userData.address.city}</p>
                <p> ZipCode:{userData.address.zipcode}</p>
                <h3> GEO-Lat: {userData.address.geo.lat}</h3>
                <h3>GEO-Lng: {userData.address.geo.lng}</h3>
            </div>
        <div className="card__footer">
            <div className='="info"'>
             <h4> Phone: {userData.phone}</h4> 
             <h4> Website: {userData.website}</h4> 
                <h5> Company: {userData.company.name}</h5>   
                <h5> CatchPhrase: {userData.company.catchPhrase}</h5> 
                <h5> Bs: {userData.company.bs}</h5>       
            </div>
            </div>
        </div>
    )
};

export default ListOfUsers;
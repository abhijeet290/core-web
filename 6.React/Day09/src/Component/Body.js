import useFetch from "../useFetch";

function Body() {
  const { Profile, numberofProfile, setnumberofProfile, generateProfile } =
    useFetch();

  return (
    <div className="but">
      <input
        type="text"
        className="inpu"
        placeholder="Enter number of profile here"
        value={numberofProfile}
        onChange={(e) => setnumberofProfile(e.target.value)}
      ></input>
      <button onClick={() => generateProfile(Number(numberofProfile))}>
        Search Profile
      </button>
      <div className="profiles">
        {Profile.map((value) => {
          return (
            <div key={value.id} className="cards">
              <img src={value.avatar_url}></img>
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank">
                Profile
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;

// Try catch functionality add karo
// UseCallBack function add karne ki koshish
// Search button: Name ke basis: User profile exist, display kara dena

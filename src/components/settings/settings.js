import React, { useState, useEffect } from "react";
import "./settings.css";
import { getUserFetch } from "../../utils";

export const Settings = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showButtons2, setShowButtons2] = useState(false);
  const [user, setUser] = useState("");
  const getUser = async () => {
    const profile = await getUserFetch("61d5ace72b3bb16c099a7b29");
    console.log(profile);
    setUser(profile.user.username);
  };

  useEffect(() => {
    getUser();
  }, []);

  const buttonHandler = async () => {
    if (showButtons) {
      setShowButtons(false);
    } else {
      setShowButtons(true);
    }
  }

  const buttonHandler2 = async () => {
    if (showButtons2) {
      setShowButtons2(false);
    } else {
      setShowButtons2(true);
    }
  }

  const UserProfile = (props) => {
    return (
      <div className="UserProfile">
        <img src={props.Img} className="Img" />
        <h2>{props.username}</h2>
      </div>
    );
  };

  const EditProfile = (props) => {
    return (
      <div className="EditProfile">
        <button>{props.title}</button>
      </div>
    );
  };

  const Colour = (props) => {
  return (
    <div className="Colour">
        <button onClick={buttonHandler}>Colour</button>
        {!showButtons ? "" : (
          <>
            <SubCategories
        title={props.colour1}
      />
            <SubCategories
        title={props.colour2}
      />
          </>
        )}
    </div>
  );
};

const FontSize = (props) => {
  return (
    <div className="FontSize">
      <button onClick={buttonHandler2}>Font</button>
        {!showButtons2 ? "" : (
          <>
      <SubCatFont
        title={props.sizeSmall}
      />
      <SubCatFont
        title={props.sizeMedium}
      />
      <SubCatFont
        title={props.sizeLarge}
      />
      </>
      )}
    </div>
  );
};

const SubCategories = (props) => {
  return (
    <div>
      <button className="Subcategories">{props.title}</button>
    </div>
  );
};

const SubCatFont = (props) => {
  return (
    <div>
      <button className="Subcategories">{props.title}</button>
    </div>
  );
};
  return (
    <div>
      <div className="userProfile">
        <h1>Settings</h1>
        <p>{user.username}</p>
        <UserProfile
          Img="https://res.cloudinary.com/cn-project/image/upload/v1641488639/pana/Binary_code-pana_ld9rm6.png"
          username={user}
        />
        <EditProfile
          title="Edit Profile" />
      </div>
      
      <div style={{ display: "flex", flexDirection: "column" }}>
      <Colour
        title="Colour Scheme"
        colour1="light"
        colour2="dark"
      />
      
      <div style={{ display: "flex", flexDirection: "column" }}>
      <FontSize
        title="Font Size"
        sizeSmall="small"
        sizeMedium="medium"
        sizeLarge="large"
      />
      </div>
      
        <button onClick={buttonHandler2}>List Styles</button>
        {!showButtons2 ? "" : (
          <>
            <button>Style 1</button>
            <button>Style 2</button>
            <button>Style 3</button>
          </>
        )}
      </div>
    </div>
  );
}




// import React, { useState, useEffect } from "react";
// import "./settings.css";
// import { getUserFetch } from "../../utils";

// export const Settings = (props) => {
//   const [user, setUser] = useState("");
//   const [showButtons, setShowButtons] = useState(false);
//   const getUser = async () => {
//     const profile = await getUserFetch("61d5ace72b3bb16c099a7b29");
//     console.log(profile);
//     setUser(profile.user.username);
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   const buttonHandler = async () => {
//     if (showButtons) {
//       setShowButtons(false);
//     } else {
//       setShowButtons(true);
//     }
//   }

//   return (
//     <div className="userProfile">
//       <h1>Settings</h1>
//       <p>{user.username}</p>
//       <UserProfile
//         Img="https://res.cloudinary.com/cn-project/image/upload/v1641488639/pana/Binary_code-pana_ld9rm6.png"
//         username={user} // user profile details linked with the back-end database
//       />
//       <EditProfile
//         title="Edit Profile"
//       />
// //       <Colour
//         title="Colour Scheme"
//         colour1="light"
//         colour2="dark"
//       />
//       <FontSize
//         title="Font Size"
//         sizeSmall="small"
//         sizeMedium="medium"
//         sizeLarge="large"
//       />
//       <ListStyle
//         title="List Style"
//         scratch="scratchcard"
//         flip="card flip"
//         checklist="checklist"
//       />
//       <Delete
//         title="DELETE PROFILE"
//       />
//     </div>
//   );
// };

// const UserProfile = (props) => {
//   return (
//     <div className="UserProfile">
//       <img src={props.Img} className="Img" />
//       <h2>{props.username}</h2>
//     </div>
//   );
// };

// const Colour = (props) => {
//   return (
//     <div className="Colour">
//       <button onClick={buttonHandler}>{props.title}</button>
//       {!showButtons ? <SubCategories /> : null}
//       <SubCategories
//         title={props.colour1}
//       />
//       <SubCategories
//         title={props.colour2}
//       />
//     </div>
//   );
// };

// const FontSize = (props) => {
//   return (
//     <div className="FontSize">
//       <button>{props.title}</button>
//       <SubCategories
//         title={props.sizeSmall}
//       />
//       <SubCategories
//         title={props.sizeMedium}
//       />
//       <SubCategories
//         title={props.sizeLarge}
//       />
//     </div>
//   );
// };

// const ListStyle = (props) => {
//   return (
//     <div className="ListStyle">
//       <button>{props.title}</button>
//       <SubCategories
//         title={props.scratch}
//       />
//       <SubCategories
//         title={props.flip}
//       />
//       <SubCategories
//         title={props.checklist}
//       />
//     </div>
//   );
// };

// const EditProfile = (props) => {
//   return (
//     <div className="EditProfile">
//       <button>{props.title}</button>
//       {/* <button onClick={toggleBtn}>{props.title}</button> */}
//     </div>
//   );
// };

// const SubCategories = (props) => {
//   return (
//     <div>
//       <button className="Subcategories">{props.title}</button>
//     </div>
//   );
// };

// const Delete = (props) => {
//   return (
//     <div>
//       <button className="Delete">{props.title}</button>
//     </div>
//   );
// };

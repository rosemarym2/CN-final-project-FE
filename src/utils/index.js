//USER

export const signUpFetch = async (username, email, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
    const data = await response.json();
    console.log(data);
    return response.ok;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const logInFetch = async (username, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    })
    const data = await response.json();
    return data.user._id;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getUserFetch = async (id) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}users/${id}`;
    const response = await fetch(url, {
      method: "GET"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const updateUserFetch = async (id, key, value) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}users/${id}`;
    const obj = {}
    obj[key] = value;
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const updateUserEmailFetch = async (id, email) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}userEmail/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email
      })
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const updateUserPasswordFetch = async (id, password) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}userPassword/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password
      })
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const addToUserListsFetch = async (id, list) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}users/${id}/lists`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(list)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const updateListItemCompletionStateFetch = async (userId, listId, itemName, itemCompletionState) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}users/${userId}/lists/${listId}/state`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName,
        completed: itemCompletionState
      })
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const updateListFetch = async (userId, listId, key, value) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}users/${userId}/lists/${listId}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key,
        value
      })
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const deleteSpecificListFetch = async (userId, listId) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}users/${userId}/lists/${listId}`;
    const response = await fetch(url, {
      method: "DELETE"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const deleteUserFetch = async (id) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}users/${id}`;
    const response = await fetch(url, {
      method: "DELETE"
    });
    return response.ok;
  } catch (err) {
    console.log(err);
  }
}

//LIST

export const addNewListFetch = async (title, category, listImage, access, keywords, listItems) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}lists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        category,
        listImage,
        access,
        status: "",
        keywords,
        listItems
      })
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export const getAllListsFetch = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}lists`, {
      method: "GET"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const getFilteredListsFetch = async (filteredBy, value) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}filteredLists` + `?filteredBy=${filteredBy}&value=${value}`;
    const response = await fetch(url, {
      method: "GET"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const getSpecificListFetch = async (id) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}lists/${id}`;
    const response = await fetch(url, {
      method: "GET"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const deleteListItemFetch = async (id, itemName) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}editList/${id}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName
      })
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
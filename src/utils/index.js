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
    console.log(data);
    return response.ok;
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

export const deleteUserFetch = async (id) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}users/${id}`;
    const response = await fetch(url, {
      method: "DELETE"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

//LIST

export const addNewListFetch = async (title, category, listItems) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}lists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        category,
        listItems
      }),
    });
    const data = await response.json();
    console.log(data);
    return response.ok;
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

export const updateListItemCompletionStateFetch = async (id, itemName, itemCompletionState) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}lists/${id}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName,
        itemCompletionState
      }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const updateListFetch = async (id, key, value) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}updateList/${id}`;
    const obj = {}
    object[key] = value;
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
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
      }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export const deleteSpecificListFetch = async (id) => {
  try {
    const url = `${process.env.REACT_APP_REST_API}lists/${id}`;
    const response = await fetch(url, {
      method: "DELETE"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
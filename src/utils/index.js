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
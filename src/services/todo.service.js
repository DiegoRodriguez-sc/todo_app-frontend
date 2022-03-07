import { fetchPrivate } from "./fetchPrivate.service";
import { fetchPublic } from "./fetchPublic.service";

const endpoint = process.env.REACT_APP_ENDPOINT_TODO || "/todo";

const datos = { resp: null, error: null };

export const getTodoByUser = async (id) => {
  const resp = await fetchPublic(`${endpoint}/user`, null, "GET", id);
  if (resp.ok) {
    const ok = await resp.json();
    datos.resp = ok;
    datos.error = null;
  } else {
    const err = await resp.json();
    datos.resp = null;
    datos.error = err;
  }
  return datos;
};

export const postTodo = async (data) => {
  const resp = await fetchPrivate(endpoint, data, "POST", null);
  if (resp.ok) {
    const ok = await resp.json();
    datos.resp = ok;
    datos.error = null;
  } else {
    const err = await resp.json();
    datos.resp = null;
    datos.error = err;
  }
  return datos;
};

export const putTodo = async (data, id) => {
  const resp = await fetchPrivate(endpoint, data, "PUT", id);
  if (resp.ok) {
    const ok = await resp.json();
    datos.resp = ok;
    datos.error = null;
  } else {
    const err = await resp.json();
    datos.resp = null;
    datos.error = err;
  }
  return datos;
};

export const deleteTodo = async (id) => {
  const resp = await fetchPrivate(endpoint, null, "DELETE", id);
  if (resp.ok) {
    const ok = await resp.json();
    datos.resp = ok;
    datos.error = null;
  } else {
    const err = await resp.json();
    datos.resp = null;
    datos.error = err;
  }
  return datos;
};

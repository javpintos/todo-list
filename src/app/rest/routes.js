const base =
     "https://my-json-server.typicode.com/javpintos/fake-todo-api";

export const routes = {
  jobs: {
    getAll: () => `${base}/jobs?_expand=owner`,
    getById: (id) => `${base}/jobs/${id}?_expand=owner`,
    delete: (id) => `${base}/jobs/${id}`,
    create: () => `${base}/jobs`,
    update: (id) => `${base}/jobs/${id}`,
  },
  organizations: {
    getAll: () => `${base}/organizations`,
    getById: (id) => `${base}/organizations/${id}`,
    delete: (id) => `${base}/organizations/${id}`,
    create: () => `${base}/organizations`,
  },
  places: {
    getAll: () => `${base}/places`,
    getById: (id) => `${base}/places/${id}`,
    delete: (id) => `${base}/places/${id}`,
    create: () => `${base}/places`,
  },
  countries: {
    getAll: () => `${base}/countries`,
    getById: (id) => `${base}/countries/${id}`,
    delete: (id) => `${base}/countries/${id}`,
    create: () => `${base}/countries`,
  }
};
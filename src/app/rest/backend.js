import axios from 'axios'
import { routes } from './routes'

const post = async (url, data) => {
    const request = {
        method: 'post',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    try{
        const response = await axios(request)
        return response.data 
    }catch(err){
        console.error(err)
        throw Error(err)
    }
}

const get = async (url) => {
    const request = {
        method: 'get',
        url: url,
        headers: {
            "Content-Type": "application/json"
        }
    }
    try{
        const response = await axios(request)
        return response.data 
    }catch(err){
        console.error(err)
        throw Error(err)
    }
}

const del = async (url) => {
    const request = {
        method: 'delete',
        url: url,
        headers: {
            "Content-Type": "application/json"
        }
    }
    try{
        const response = await axios(request)
        return response.data 
    }catch(err){
        console.error(err)
        throw Error(err)
    }
}

const patch = async (url,data) => {
    const request = {
        method: 'patch',
        url: url,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    }
    try{
        const response = await axios(request)
        return response.data 
    }catch(err){
        console.error(err)
        throw Error(err)
    }
}

export const getAllJobs = async () => {
    const jobs = await get(routes.jobs.getAll())
    return jobs
}

export const getJob = async (idJob) => {
    const job = await get(routes.jobs.getById(idJob))
    return job
}

export const deleteJob = async (idJob) => {
    await del(routes.jobs.delete(idJob))
    return idJob
}

export const updateJob = async (idJob, newData) => {
    const updatedJob = await patch(routes.jobs.update(idJob), newData)
    return updatedJob
}

export const createJob = async (newJob) => {
    const created = await post(routes.jobs.create(), newJob)
    return created
}

export const getOrganization = async (idOrganization) => {
  const organization = await get(routes.organizations.getById(idOrganization));
  return organization;
};

export const deleteOrganization = async (idOrganization) => {
  await del(routes.organizations.delete(idOrganization));
  return idOrganization;
};

export const updateOrganization = async (idOrganization, newData) => {
  const updatedOrganization = await patch(routes.organizations.update(idOrganization), newData);
  return updatedOrganization;
};

export const createOrganization = async (newOrganization) => {
  const created = await post(routes.organizations.create(), newOrganization);
  return created;
};

export const getPlace = async (idPlace) => {
  const place = await get(routes.places.getById(idPlace));
  return place;
};

export const deletePlace = async (idPlace) => {
  await del(routes.places.delete(idPlace));
  return idPlace;
};

export const updatePlace = async (idPlace, newData) => {
  const updatedPlace = await patch(routes.places.update(idPlace), newData);
  return updatedPlace;
};

export const createPlace = async (newPlace) => {
  const created = await post(routes.places.create(), newPlace);
  return created;
};

export const getCountry = async (idCountry) => {
  const country = await get(routes.countries.getById(idCountry));
  return country;
};

export const deleteCountry = async (idCountry) => {
  await del(routes.countries.delete(idCountry));
  return idCountry;
};

export const updateCountry = async (idCountry, newData) => {
  const updatedCountry = await patch(routes.countries.update(idCountry), newData);
  return updatedCountry;
};

export const createCountry = async (newCountry) => {
  const created = await post(routes.countries.create(), newCountry);
  return created;
};

export const getAllOrganizations = async () => {
  const organizations = await get(routes.organizations.getAll());
  return organizations;
};

export const getAllPlaces = async () => {
  const places = await get(routes.places.getAll());
  return places;
};

export const getAllCountries = async () => {
  const countries = await get(routes.countries.getAll());
  return countries;
};
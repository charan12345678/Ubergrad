import axios from 'axios';

export const getApiResponseObject = async (
    url,
    headers =  { 'Content-type': 'application/json' },
    handleErrors = true
  ) => {
    try {
      const response = await axios
        .get(url, { headers: headers })
        .catch(function(error) {
          if (error.response) {
            return error.response;
          } else if (error.request) {
            return error.request;
          } else {
            return error;
          }
        });
      return response;
    } catch (error) {
      if (handleErrors) {
        if (error.response) {
          return error.response;
        }
      
        return error;
      };
    }
  };
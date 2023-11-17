export const getAllEmployees = async () => {
  try {
    const response = await fetch(
      'https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d',
    );

      if (response.status !== 200) {
        throw new Error(`HTTP error: ${response.status}`);
      }
    console.log(response.status, 'statusText', response.statusText);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

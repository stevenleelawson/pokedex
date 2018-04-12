export const getTypes = async () => {
  try{
    const response = await fetch('http://localhost:3001/types');
    const data = await response.json();
    return data
  } catch (error){
    throw new Error('unable to get pokes')
  }
}

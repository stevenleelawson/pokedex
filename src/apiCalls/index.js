export const getTypes = async () => {
  try{
    const response = await fetch('http://localhost:3001/types');
    const data = await response.json();
    return data
  } catch (error){
    throw new Error('unable to get pokes')
  }
}

export const getPokeById = async (id) => {
  try{
    const response = await fetch(`http://localhost:3001/pokemon/${id}`);
    const data = await response.json();
    return data
  } catch(error) {
    throw new Error('Unable to get poke' + error.message)
  }
}

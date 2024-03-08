const responseHandler = async (response)=>{
    if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        throw new Error("api not found");
      }
}

export {
    responseHandler
}
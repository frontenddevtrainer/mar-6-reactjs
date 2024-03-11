const responseHandler = async (response: Response)=>{
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
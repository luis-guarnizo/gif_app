export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wzXbdNo3sco4b4EhYEhK83OxLZeod1gi&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    

    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ));
    console.log(gifs);
    return gifs;

}
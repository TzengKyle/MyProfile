export const isValidUrl = (url) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
}

export const checkImageUrlValidity = (imgUrl, setIsValidImage) => {
    fetch(imgUrl)
        .then(response => {
            // 3. 检查响应状态码
            if (!response.ok) {
                setIsValidImage("errorImg");
                throw new Error('Network response was not ok');
            }
            // 检查响应类型
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('image')) {
                setIsValidImage("errorImg");
                throw new Error('URL does not return an image');
            }
            setIsValidImage("validImg");
            console.log('URL returns a valid image');
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}
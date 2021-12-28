export const imgUrlToDataString = (url : string) => {
    return new Promise<any>(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                var reader = new FileReader();
                reader.onloadend = function() {
                    resolve(reader.result);
                }
                reader.readAsDataURL(xhr.response)
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.send();
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
    })
    
}
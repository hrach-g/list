class ReqRes {
    static getData(url) {
        return fetch(url, {
            method: 'GET'
        }).then((data) => {
            return data.json()
        })
    }
    static addContact (url, obj ) {
        return fetch(url ,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj ,null, "\t")
            }).then((data) => {
                return data.json();
            })
    }
    static editContact(url , id , obj ) {
        return fetch(`${url}${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj,null, "\t")
            }).then((data) => {
              return data.json();
            })
    }
    static deleteData (url , id) {
        return fetch(`${url}${id}`,
            {
                method: 'DELETE',

            }).then((data) => {
                return data.json();
            })
    }
}
export default ReqRes
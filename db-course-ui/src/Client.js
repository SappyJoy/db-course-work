export default class Client {

    numbers() {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET",
                "http://localhost:8080/db-course/resources/numbers");
            request.onreadystatechange = () => {
                let raw = request.responseText;
                let objectified = JSON.parse(raw);
                resolve(objectified);
            }
            request.send();
        });
    }
}
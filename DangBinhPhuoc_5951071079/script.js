axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAJZCtBS8VUCpWdRp4evDpU6tnfYRyT4mp1qSV01iy9EusioRlVWRYZADIQKsWbF4VrGqQk6ZAQCBedtuRgEGvHYiVNFKrrKefFba2rdDegdtN68pPbAQZB32ldt03nMd1O9R3k0Konil6rmRjsCOl5V5PNm9OwZDZD')
        .then(response => {
            var output = "<p>Bài viết 1: </p>";
            output += response.data.data[0].message + "<br><p>Bài viết 2: </p>" +
            response.data.data[1].message + "</p><br><p>Bài viết 3: </p>" +
            response.data.data[2].message;

            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.error(error))
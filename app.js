$(document).ready(function () {

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://news-api-project-8401e868529d.herokuapp.com/api/news?api_key=4b1a0e44-0205-4ad8-9158-3c10c3e87ae9`
            async function mynews() {
                let responce = await fetch(url);
                let data = await responce.json();
                for (let i = 0; i < data.news.length; i++) {
                    $("#city").append(`<h4>${data.news[i].tit}</h4>`);
                }
            }
            console.log(data)
            mynews()
        }
    })

    $("#btn").click(async function (e) {
        e.preventDefault();
        let url = `https://news-api-project-8401e868529d.herokuapp.com/api/news?api_key=4b1a0e44-0205-4ad8-9158-3c10c3e87ae9`
        async function mynews() {
            let responce = await fetch(url);
            let data = await responce.json();
            for (let i = 0; i < data.news.length; i++) {
                $("#city").append(`<h4>${data.news[i].tit}</h4>`);
            }
        }
        await mynews()
    });
})

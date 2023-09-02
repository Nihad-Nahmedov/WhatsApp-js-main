$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://apifirst-abbe35a2b6ee.herokuapp.com/api/news?api_key=4b1a0e44-0205-4ad8-9158-3c10c3e87ae9`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                console.log(data.news[0].tit)
            }
            myweather()
        }
    })
})
/*    $("#btn").click(async function (e) {
        e.preventDefault();
        let url = `https://apifirst-abbe35a2b6ee.herokuapp.com/api/news?api_key=4b1a0e44-0205-4ad8-9158-3c10c3e87ae9`
        async function mynews() {
            let responce = await fetch(url);
            let data = await responce.json();
            console.log(data)
        }

        await mynews()
    });
})
*/

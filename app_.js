
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest() // 1-oe создание запроса
    request.open("GET", "peoples.json")// 2-ое объявление метода запроса и указание пути
    request.setRequestHeader('Content-type', 'application/json') // 3-ое указывание заголовка
    request.send() // 4-ое отправка запроса
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        const wrapper = document.querySelector('.wrapper')

        data.forEach((item) => {
            const div = document.createElement('div')
            div.setAttribute('class', 'user')
            div.innerHTML = `
                <img src="image/avatar.jpg" alt=""
                <h2 class="text">Name: ${item.name}</h2>
                <span>Age:${item.age}</span>
            `
            wrapper.append(div)
        })
    })
})


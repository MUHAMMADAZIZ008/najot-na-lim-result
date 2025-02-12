const box = document.querySelector('.box')

const controller = new AbortController();
const signal = controller.signal
async function generator() {
    try {
        const data = await fetch('https://dummyjson.com/products', { signal });
        let products = await data.json()
        products = products.products
        let html = ''
        for (let item of products) {
            html += `
                <h1>Title: ${item.title}</h1>
            `
        }
        box.innerHTML = html

    } catch (error) {
        alert(error.message)
    }

}
generator()

// setTimeout(() => controller.abort(), 10);


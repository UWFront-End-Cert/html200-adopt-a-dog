let p1 = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."


const createPost = () => {

    const blogNode = document.createElement('div')
    blogNode.setAttribute('class', 'top')
    document.querySelector(".main").appendChild(blogNode)

    const imgNode = document.createElement('img')
    // set class
    imgNode.setAttribute('src', 'images/blog-1.jpg')
    imgNode.setAttribute('alt', 'Person with dog')
    imgNode.setAttribute('class', 'blog-dogs')
    blogNode.appendChild(imgNode)

    const blogDiv = document.createElement('div')
    blogDiv.setAttribute("class", "blog-text")
    blogNode.appendChild(blogDiv)

    const blogDivH2 = document.createElement('h2')
    blogDivH2.innerHTML = "Traveling With Your Dog"
    blogDiv.appendChild(blogDivH2)

    const blogDivP1 = document.createElement('p')
    blogDivP1.innerHTML = p1
    blogDiv.appendChild(blogDivP1)

    const blogDivP2 = document.createElement('p')
    blogDivP2.innerHTML = p1
    blogDiv.appendChild(blogDivP2)
}

createPost()

const createPost2 = () => {

    const blogNode = document.createElement('div')
    blogNode.setAttribute('class', 'top')
    document.querySelector(".main").appendChild(blogNode)

    const imgNode = document.createElement('img')
    // set class
    imgNode.setAttribute('src', 'images/blog-2.jpg')
    imgNode.setAttribute('alt', 'Person with dog')
    imgNode.setAttribute('class', 'blog-dogs')
    blogNode.appendChild(imgNode)

    const blogDiv = document.createElement('div')
    blogDiv.setAttribute("class", "blog-text")
    blogNode.appendChild(blogDiv)

    const blogDivH2 = document.createElement('h2')
    blogDivH2.innerHTML = "Traveling With Your Dog"
    blogDiv.appendChild(blogDivH2)

    const blogDivP1 = document.createElement('p')
    blogDivP1.innerHTML = p1
    blogDiv.appendChild(blogDivP1)

    const blogDivP2 = document.createElement('p')
    blogDivP2.innerHTML = p1
    blogDiv.appendChild(blogDivP2)
}

createPost2()

const createPost3 = () => {

    const blogNode = document.createElement('div')
    blogNode.setAttribute('class', 'top')
    document.querySelector(".main").appendChild(blogNode)

    const imgNode = document.createElement('img')
    // set class
    imgNode.setAttribute('src', 'images/blog-3.jpg')
    imgNode.setAttribute('alt', 'Person with dog')
    imgNode.setAttribute('class', 'blog-dogs')
    blogNode.appendChild(imgNode)

    const blogDiv = document.createElement('div')
    blogDiv.setAttribute("class", "blog-text")
    blogNode.appendChild(blogDiv)

    const blogDivH2 = document.createElement('h2')
    blogDivH2.innerHTML = "Traveling With Your Dog"
    blogDiv.appendChild(blogDivH2)

    const blogDivP1 = document.createElement('p')
    blogDivP1.innerHTML = p1
    blogDiv.appendChild(blogDivP1)

    const blogDivP2 = document.createElement('p')
    blogDivP2.innerHTML = p1
    blogDiv.appendChild(blogDivP2)
}

createPost3()
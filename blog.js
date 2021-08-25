let p1 = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."
let p2 = "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."

const createPost = (src, alt, headerText, para1, para2) => {

    const blogNode = document.createElement('div')
    blogNode.setAttribute('class', 'blog-guide')
    document.querySelector(".main").appendChild(blogNode)

    const imgNode = document.createElement('img')
    // set class
    imgNode.setAttribute('src', src)
    imgNode.setAttribute('alt', alt)
    imgNode.setAttribute('class', 'blog-image')
    blogNode.appendChild(imgNode)

    const blogDiv = document.createElement('div')
    blogDiv.setAttribute("class", "container")
    blogNode.appendChild(blogDiv)

    const blogDivH2 = document.createElement('h2')
    blogDivH2.innerHTML = headerText
    blogDiv.appendChild(blogDivH2)

    const blogDivP1 = document.createElement('p')
    blogDivP1.innerHTML = para1
    blogDiv.appendChild(blogDivP1)

    const blogDivP2 = document.createElement('p')
    blogDivP2.innerHTML = para2
    blogDiv.appendChild(blogDivP2)
}

createPost("images/blog-1.jpg", "Traveling", "Traveling With Your Dog", p1, p2);
createPost("images/blog-2.jpg", "Walking", "How To Walk Multiple Dogs", p1, p2);
createPost("images/blog-3.jpg", "Teaching", "Teaching Your Dog To Fetch!", p1, p2);

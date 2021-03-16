
let totalCostArray = [];
const dogBlogData = 
[
    {
    image: './images/blog-1.jpg',
    altText: 'Dog with Owner on a cliff',
    title:'How to Walk your Dog',
    blogText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit imperdiet urna, vitae dignissim enim iaculis eu. Interdum et mlesuada fames ac ante ipsum primis in faucibus. Ut a justo pellentesque, gravida lacus id, rhoncus lorem. Cras aliquam mauris lacus, lacinia posuere tellus blandit id. Morbi consectetur neque ac odio eleifend dictum. Vestibulum tempus velit eu nibh laoreet, vel eleifend nisi ornare. Nulla rhoncus suscipit velit ut suscipit. Maecenas quis consectetur sapien. Maecenas vel fringilla tellus. Cras fringilla nibh sed neque pellentesque accumsan.'
    },
    {
    image: './images/blog-2.jpg',
    altText: 'Multiple dogs on leashes',
    title: 'How to Walk Multiple Dogs',
    blogText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit imperdiet urna, vitae dignissim enim iaculis eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a justo pellentesque, gravida lacus id, rhoncus lorem. Cras aliquam mauris lacus, lacinia posuere tellus blandit id. Morbi consectetur neque ac odi eleifend dictum. Vestibulum tempus velit eu nibh laoreet, vel eleifend nisi ornare. Nulla rhoncus suscipit velit ut suscipit. Maecenas quis consectetur sapien. Maecenas vel fringilla tellus. Cras fringilla nibh sed neque pellentesque accumsan.'
    },
    {
    image: './images/blog-3.jpg',
    altText: 'Dog and owner with sunset',
    title: 'How to Teach Your Dog To Fetch',
    blogText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit imperdiet urna, vitae dignissim enim iaculis eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a justo pellentesque, gravida lacus id, rhoncus lorem. Cras aliquam mauris lacus, lacinia posuere tellus blandit id. Morbi consectetur neque ac odio eleifen dictum. Vestibulum tempus velit eu nibh laoreet, vel eleifend nisi ornare. Nulla rhoncus suscipit velit ut suscipit. Maecenas quis consectetur sapien. Maecenas vel fringilla tellus. Cras fringilla nibh sed neque pellentesque accumsan.'
    }
];
let total = 0.00;
function arraySummer(dogCost) {
    totalCostArray.push (dogCost);

    let summer = (cost, totalCost) => cost + totalCost;
    totalCostArray.push(0);
    let total = (totalCostArray.reduce(summer));
    // alert('Your total cost is $' + total);
    $('#checkout-value').html('$' + total);
}
$('button').click(function(event) {
    $('button').removeClass('button-effect');
    $(this).addClass('button-effect');
});




function dogInfoSheetReturn(dogCost,dogName, dogBreed) {
    alert('Your dog cost ' + '$' + dogCost + ' and is named ' + dogName + ' of the breed ' + dogBreed + '.');
}
function blogFieldsGenerator() {
        const gridItemContainer = document.getElementById('gridItemContainer');

        for (i = 0; i < dogBlogData.length; i ++){
            const blogMainHolder = document.createElement('article');
            blogMainHolder.className = 'blog-main-holder';
            gridItemContainer.appendChild(blogMainHolder);
            const blogImageHolder = document.createElement('div');
            blogImageHolder.className = 'blog-img-holder';
            blogMainHolder.appendChild(blogImageHolder);
            const image = document.createElement('img');
            image.src = dogBlogData[i].image;
            image.alt = dogBlogData[i].altText;
            blogImageHolder.appendChild(image);  
            const blogTextHolder = document.createElement('div');
            blogTextHolder.className = 'blog-text-holder';
            blogMainHolder.appendChild(blogTextHolder);
            const blogSubHeader = document.createElement('h3');
            blogSubHeader.className = 'blog-sub-header';
            blogSubHeader.textContent = dogBlogData[i].title;
            blogTextHolder.appendChild(blogSubHeader);
            const blogSubPara = document.createElement('p');
            blogSubPara.className = 'blog-sub-paragraph';
            blogSubPara.textContent = dogBlogData[i].blogText;
            blogTextHolder.appendChild(blogSubPara);    
        }
}
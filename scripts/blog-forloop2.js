const posts = [
	{
		title: 'Traveling With Your Dog',
		content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
		imagesrc: 'images/blog-1.jpg',
		imagealt: 'a woman holding a dog facing the grand canyon'
	},
	{
		title: 'How To Walk Multiple Dog',
		content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
		imagesrc: 'images/blog-2.jpg',
		imagealt: 'a woman holding a dog facing the grand canyon'
	},
	{
		title: 'Teach Your Dog To Fetch!',
		content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
		imagesrc: 'images/blog-3.jpg',
		imagealt: 'a woman holding a dog facing the grand canyon'
	},
];

for ( i = 0; i < posts.length; i++) {
	const post = posts[i];
	const imagesrc = post.imagesrc;
	const imagealt = post.imagealt;
	const title = post.title;
	const content = post.content;
	console.log(imagesrc + title + content);
};

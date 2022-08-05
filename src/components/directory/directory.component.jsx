import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
    {
        id:1,
        title: 'Books',
        imageUrl: 'https://ychef.files.bbci.co.uk/1600x900/p03gg1lc.webp',
        route: 'shop/books'
    },
    {
        id:2,
        title: 'Clothes',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        route: 'shop/clothes'
    },
    {
        id:3,
        title: 'Furniture',
        imageUrl: 'https://www.ikea.com/images/see-the-home-tours-34b895b5a5e630a790197fe3d9ec0e95.jpg?f=s',
        route: 'shop/furniture'
    },
    {
        id:4,
        title: 'Electronics',
        imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Old_Electronics_hero_1.jpg',
        route: 'shop/electronics'
    },
    {
        id:5,
        title: 'Foods',
        imageUrl: 'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2022/01/521873-103-Most-Nutritious-Foods-Header.png?w=1155&h=1528',
        route: 'shop/foods'
    }
]
const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
}

export default Directory;
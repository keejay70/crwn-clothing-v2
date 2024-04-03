import './categories.style.scss';

const Category = ({category}) => {
    return (
        <div key={category.id} className='category-container'>
        <div className='background-image' style={{backgroundImage: `url(${category.imageUrl})`}}></div>
        <div className='category-body-container'>
          <h2>{category.title}</h2>
          <p></p>
        </div>
      </div>
    );
}

export default Category;
import Category from "../category-component/category.component";

const Directory = ({categories}) => {
    return (
    <div className='categories-container'>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
    );
}

export default Directory;
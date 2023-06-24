import './AddCategory.styles.scss';
// Components
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";

const AddCategory = () => {

  return (
    <div className='modal-content'>
      <p className='modal-title'>Add Category</p>
      <Input
        placeholder="Category name"
        onChange={e => console.log(e.target.value)}
      />
      <Button
        text="Add"
        onClick={() => console.log('add category')}
      />
    </div>
  )
}

export default AddCategory;
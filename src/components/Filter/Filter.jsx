import { FilterStyled } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectStatusFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <FilterStyled>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className="filter-input"
        value={filter}
        onChange={changeFilter}
      />
    </FilterStyled>
  );
};
export default Filter;

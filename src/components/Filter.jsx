import css from './App.module.css';

function Filter({ onWrite }) {
  return (
    <input
      type="text"
      className={css.input}
      name="filter"
      placeholder="Serch Contacts"
      //   value={this.state.filter}
      onChange={onWrite}
    />
  );
}

export default Filter;

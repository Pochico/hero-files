import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h2>Search</h2>

            <div>
                <form className="hero-form" onSubmit={onSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search a hero"
                        className="hero-input"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={onInputChange}
                    />

                    <button>Search</button>
                </form>
            </div>
            <div className="heroes-list">
                {heroes.length === 0 ? (
                    <h3>
                        No heroes by the name of{' '}
                        <span className="red-text">
                            <i>{q}</i>
                        </span>
                    </h3>
                ) : (
                    heroes.map((hero) => <HeroCard key={hero.id} {...hero} />)
                )}
            </div>
        </>
    );
};

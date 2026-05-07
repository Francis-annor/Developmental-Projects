import { useState, useTransition } from 'react';

// This file implements a search results component with non-blocking state updates using React's useTransition hook.

/**
 * Component that renders a list of search results based on the provided query.
 * @param {string} query - The search query string.
 * @returns {JSX.Element} A ul element containing li elements for each result.
 */
function SearchResults({ query }){
    const items = [];
    if(query){
        // Generate 100 mock search results for demonstration purposes.
        for(let i = 0; i < 5; i++){
            items.push(<li key={i}>Search Results for {query} - {i}</li>);
        }
    }

    return (
        <ul>{items}</ul>
    );
}

/**
 * Main component that provides a search input and displays search results.
 * Uses useTransition to update the query state without blocking the UI.
 * @returns {JSX.Element} The search interface with input and results.
 */
export default function Results(){
    const [input, setInput ] = useState('');
    const [query, setQuery ] = useState('');
    const [isPending, startTransition ] = useTransition();

    /**
     * Handles input changes, updating the input state immediately and
     * deferring the query update to a transition for non-blocking behavior.
     * @param {Event} e - The input change event.
     */
    const handleChange = (e) => {
        setInput(e.target.value);

        startTransition(() => {
            setQuery(e.target.value);
        });
    }

    return(
        <div>
            <input 
            type='text' 
            value={input} 
            onChange={handleChange} 
            placeholder='Type to search...' 
            />
            { isPending && <h2>Loading Results...</h2> }
            <SearchResults query={query} />
        </div>
    )
}
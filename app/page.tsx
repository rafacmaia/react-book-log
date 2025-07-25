import Header from './components/Header';
import Entry from './components/Entry.jsx';
import Footer from './components/Footer.jsx';
import bookData from './bookData.js';

export default function Home() {
    const entryElements = bookData.map(book =>
        <Entry
            key={book.id}
            cover={book.coverImg}
            title={book.title}
            author={book.author}
            year={book.year}
            rating={book.rating}
            goodreads={book.goodreads}
            datesRead={book.datesRead}
            thoughts={book.thoughts}
        />
    );

    return (
        <>
            <Header/>
            <main>{entryElements}</main>
            <Footer/>
        </>);
}

import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,reading}) => {
    return (
        <div className="md:1/3  text-center bg-gray-300 ml-4 mt-2 p-4">

            <div>
                <h3 className="text-4xl">{reading}</h3>
            </div>
            <h2 className="text-3xl">Bookmark Blogs : {bookmarks.length}</h2>

            {
              bookmarks.map(bookmark=><Bookmark key={bookmark.id}   bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.object,
    reading:PropTypes.number
}
export default Bookmarks;
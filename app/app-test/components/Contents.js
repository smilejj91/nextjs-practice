import Thumbnail from "./Thumbnail"

function Contents({ contents }) {

    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center">
            {contents.map(content => (
                <Thumbnail key={content.id} content={content} />
            ))}
        </div>
    )
}

export default Contents

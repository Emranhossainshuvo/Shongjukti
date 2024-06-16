
const AddBlog = () => {

    const handlePublish = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const blog = form.blog.value;
        console.log(title, blog)
    }

    return (
        <>
           <section className="max-w-screen-lg mt-5 mx-auto">
            <form onSubmit={handlePublish} className="flex flex-col gap-5">
                <input className="outline-none text-2xl hover:border-gray-400 border-gray-200 border-b-2 pb-2 font-semibold" type="text" placeholder="What the blog about" name="title" />
                <textarea name="blog" id="" className="outline-none" placeholder="Write down your thoughts" cols={10} rows={10}></textarea>
                <input className="bg-[#31473a] cursor-pointer text-white flex justify-start w-16 p-1 rounded-sm" type="submit" value="Publish" />
            </form>
           </section>
        </>
    );
};

export default AddBlog;